import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationC = ({ page, setPage, totalPages }) => {
  let active = page;
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        onClick={() => {
          setPage(number);
        }}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Pagination>{items}</Pagination>
    </>
  );
};

export default PaginationC;
