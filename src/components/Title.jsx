import React, { useState } from "react";
import classes from "./Title.module.css";

export default function Title(props) {
  const [chevronDown, setChevronDown] = useState(true);

  const changeChevron = () => {
    setChevronDown((prevChevronDown) => !prevChevronDown);
    props.sortCatalog();
  };

  return (
    <div onClick={(event) => changeChevron(event)} className={classes.wrapper}>
      <h3>{props.name}</h3>
      {chevronDown ? (
        <svg
          xmlns="http://www.w3.org/2000/svg "
          width="16"
          height="16"
          fill="white"
          class="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          class="bi bi-chevron-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      )}
    </div>
  );
}
