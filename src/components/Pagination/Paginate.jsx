import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Paginate = (props) => {
  //   const {data} = props;
  //   const [curentItems, setCurrentItems] = useState(null);
  //   const [pageCount, setPageCount] = useState(0);
  //   const [itemOffset, setItemOffset] = useState(0);
  //   const itemsPerPage = 9;

  //   useEffect(() => {
  //     const endOffset = itemOffset + itemsPerPage;
  //     setCurrentItems(data.slice(itemOffset, endOffset));
  //     setPageCount(Math.ceil(data.length / itemsPerPage));
  //   },[itemOffset, itemsPerPage,data]);

  //   const handlePageClick = (event) =>{
  //     const newOffset = (event.selected * itemsPerPage) % data.length;
  //     setItemOffset(newOffset);
  //   };

  const { data } = props;
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  return (
    <div className="Paginate">
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
    </div>
  );
};

export default Paginate;
