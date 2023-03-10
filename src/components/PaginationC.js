import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationC = ({ page, setPage, totalPages, setLoader }) => {
  let items = [];
  let active = page;
  let pagClass = "";
  for (let number = 1; number <= totalPages; number++) {
    if (active !== number) {
      pagClass = "pagination-item";
    } else {
      pagClass = "pagination-item  pagination-active-item";
    }
    items.push(
      <div
        key={"page" + number}
        className={pagClass}
        onClick={() => {
          setPage(number);
          setLoader(true);
        }}
      >
        {number}
      </div>
    );
  }

  return <>{totalPages > 1 && <Pagination>{items}</Pagination>}</>;
};

export default PaginationC;
