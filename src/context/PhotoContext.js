import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
import { setupCache } from 'axios-cache-adapter'



const cache = setupCache ({
  maxAge: 15 * 60 * 1000 
})

export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = query => {
    axios.create ({
      adapter: cache.adapter
    })
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&has_geo=1&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
