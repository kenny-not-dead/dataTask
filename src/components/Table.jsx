import React, { useState } from "react";
import Title from "./Title";
import classes from "./Table.module.css";
import DataItem from "./DataItem";
import Pagination from "./Pagination";

export default function Table(props) {
  //sort

  const [selectedSort, setSelectedSort] = useState("id");

  const sortId = () => {
    if (selectedSort === "id") {
      props.setNewData([...props.newData].reverse());
    } else {
      props.setNewData([...props.newData].sort((a, b) => a.id - b.id));
      setSelectedSort("id");
    }
  };

  const sortTitle = () => {
    if (selectedSort === "title") {
      props.setNewData([...props.newData].reverse());
    } else {
      props.setNewData(
        [...props.newData].sort((a, b) => a.title.localeCompare(b.title))
      );
      setSelectedSort("title");
    }
  };

  const sortBody = () => {
    if (selectedSort === "body") {
      props.setNewData([...props.newData].reverse());
    } else {
      props.setNewData(
        [...props.newData].sort((a, b) => a.body.localeCompare(b.body))
      );
      setSelectedSort("body");
    }
  };

  // panagination

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const current = props.newData.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  const stepUp = () => {
    if (currentPage < perPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const stepDown = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperTitle}>
        <Title name="ID" sortCatalog={sortId} />
        <Title name="Заголовок" sortCatalog={sortTitle} />
        <Title name="Описание" sortCatalog={sortBody} />
      </div>
      {current.map((i) => (
        <DataItem i={i} />
      ))}
      <div className={classes.paginationWrapper}>
        <p className={classes.paginationP} onClick={stepDown}>
          Назад
        </p>
        <Pagination
          perPage={perPage}
          total={props.newData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        <p className={classes.paginationP} onClick={stepUp}>
          Далее
        </p>
      </div>
    </div>
  );
}
