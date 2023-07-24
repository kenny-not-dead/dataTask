import React from "react";
import classes from "./DataItem.module.css";

export default function DataItem(props) {
  return (
    <div className={classes.wrapper}>
      <p className={classes.numberId}>{props.i.id}</p>
      <p className={classes.wrapperP}>{props.i.title}</p>
      <p className={classes.wrapperP}>{props.i.body}</p>
    </div>
  );
}
