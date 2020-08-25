import React, { createContext, useState } from "react";
import axios from "axios";
import config from "../api/config";
export const PhotoContext = createContext();
const { flickrApiKey } = config;

const flickrService = axios.create({
  baseURL: "https://api.flickr.com",
  timeout: 1000,
});

const PhotoContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = async (query) => {
    // According to the flickr docs, you can pass in the extra info you want for the search.
    const photosSearchUrl = `/services/rest/?method=flickr.photos.search&api_key=${flickrApiKey}&safe_search=1&extras=geo&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    /* 
      Another solution could be implement https://www.npmjs.com/package/axios-cache-adapter
      but this seems rather overkill for something that can be done with local storage and/or
      session storage if we want to preserve that longer.
    */
    const storedQuery = localStorage.getItem(query);

    if (storedQuery) {
      setImages(JSON.parse(storedQuery));
      setLoading(false);
      console.log("Serving from storage 🚚");
    } else {
      try {
        const {
          data: {
            photos: { photo: imagesData },
          },
        } = await flickrService.get(photosSearchUrl);

        setImages(imagesData);
        setLoading(false);
        console.log("Serving from API 🐱‍🏍");
        localStorage.setItem(query, JSON.stringify(imagesData));
      } catch (error) {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      }
    }
  };

  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
