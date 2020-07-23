import React from "react";
import axios from "axios";
import { apiKey } from "../api/config";


const Image = ({ url, title, id }) => (
    <li>
    <img src={url} alt={title} onClick={() => 
    {if  (id != null) {
      axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.geo.getLocation&api_key=${apiKey}&photo_id=${id}&per_page=12&format=json&nojsoncallback=1`
    )
    .then(response => {

      console.log('Latitude', response.data.photo.location.latitude)
      console.log('longitude', response.data.photo.location.longitude)
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
    });
    }}
    }/>

  </li>
);

export default Image;