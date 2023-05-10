import axios from "axios";
import { apiKey } from "../api/config";

export const runSearch = query => {
  axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
      console.log(response);
      //setImages(response.data.photos.photo);
      //setLoading(false);
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
    });
};

