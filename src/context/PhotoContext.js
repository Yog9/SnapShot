import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
export const PhotoContext = createContext();

const flickrService = axios.create({
  baseURL: "https://api.flickr.com",
  timeout: 1000,
});

const PhotoContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = (query) => {
    const photosSearchUrl = `/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
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
      flickrService
        .get(photosSearchUrl)
        .then((response) => {
          setImages(response.data.photos.photo);
          setLoading(false);
          console.log("Serving from API 🐱‍🏍");
          localStorage.setItem(
            query,
            JSON.stringify(response.data.photos.photo)
          );
        })
        .catch((error) => {
          console.log(
            "Encountered an error with fetching and parsing data",
            error
          );
        });
    }
  };
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
