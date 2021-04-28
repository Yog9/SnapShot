import React, { useContext, useEffect, useState } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  let [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    runSearch(searchTerm, currentPage);
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery loadMore={() => setCurrentPage(currentPage += 1)} data={images} />}
    </div>
  );
};

export default Container;
