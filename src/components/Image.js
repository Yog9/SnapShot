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
      var link = `http://maps.google.com/maps?q=${response.data.photo.location.latitude},${response.data.photo.location.longitude}`
      var win = window.open(link, "_blank");
      win.focus();
    })

    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
    });
    }}
    }/>
  <div id="popup"></div>
  </li>
);

export default Image;