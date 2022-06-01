import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4 "
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setPageNumber(data.selected);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;

//forcePage={pageNumber===1? 0: pageNumber-1}
