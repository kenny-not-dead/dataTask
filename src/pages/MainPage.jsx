import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import classes from "./MainPage.module.css";
import SearchInput from "../components/SearchInput";

export default function MainPage() {
  const [newData, setNewData] = useState([]);
  const [firstData, setFirstData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => {
        setNewData(data);
        setFirstData(data);
      });
  }, []);

  //Search

  const [valuefind, setValuefind] = useState("");

  const inputHandler = (e) => {
    setValuefind(e.target.value);
    onFilter();
  };

  const onFilter = () => {
    setNewData(
      firstData.filter((i) => {
        if (
          i.title.includes(valuefind) ||
          i.id.toString().includes(valuefind) ||
          i.body.includes(valuefind)
        ) {
          return true;
        }
      })
    );
  };

  useEffect(() => {
    onFilter();
  }, [valuefind]);

  return (
    <div className={classes.container}>
      <SearchInput onChange={(e) => inputHandler(e)} />
      <Table newData={newData} setNewData={setNewData} />
    </div>
  );
}
