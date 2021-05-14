import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const runSearch = query => {

    const getImages = () => {
      axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&has_geo=1&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        addLocation(response.data.photos.photo)
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
    }

    const addLocation = async (images) => {
      let newImages = await getLocation(images)
      console.log("newImages", newImages)
      setLoading(false);
      // save all searches to state in App.js
      props.setPrevSearches(query, newImages)
      setImages(newImages)
    }

    const getLocation = (images)=>{
      images.forEach(image =>
        axios
        .get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.geo.getLocation&api_key=${apiKey}&photo_id=${image.id}&format=json&nojsoncallback=1`
        ).then(response => {
          image.location= response.data.photo.location
        })
      )
      return images
    }

    // If there are no previous searches, send a call to the API
    // If there are previous searches, filter through them to see if this query has been used before
    // If it has been used before, return the array of images from the state
    if(props.prevSearches.length) {
      console.log("prev searches")
      let resultToShow = {}
      props.prevSearches.forEach(element => {
          let key = Object.keys(element)
          console.log("key", key)
          console.log("query", query)
          if (key == query){
            resultToShow = element
          }
      });
      if (Object.keys(resultToShow).length !== 0) {
        console.log("prev searches with same key")
        let photos = Object.values(resultToShow)[0]
        setImages(photos);
        setLoading(false);
      } else {
        console.log("no prev searches with same key")
        getImages()
      }
    } else {
      console.log("no prev searches")
      getImages()
    }
  };
 
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
