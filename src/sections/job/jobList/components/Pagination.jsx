import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      nextLabel={">>"}
      breakLabel={"..."}
      previousLabel={"<<"}
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      containerClassName="flex items-center justify-center gap-3 py-6"
      activeClassName="bg-blue-500 text-white"
      pageClassName="rounded-full font-semibold size-6 flex items-center justify-center lg:size-8"
    />
  );
};

export default Pagination;
