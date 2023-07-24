import React from "react";
import classes from "./Pagination.module.css";

function Pagination(props) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.total / props.perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={classes.pagination}>
        {pageNumbers.map((number) => (
          <li className={classes.pageitem} key={number}>
            <a
              href="#"
              className={
                props.currentPage === number ? classes.active : classes.pagelink
              }
              onClick={() => props.paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
export {};
