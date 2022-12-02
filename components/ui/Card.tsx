import { FC } from "react";
import classes from "./Card.module.css";
import type { ChildrenType } from "../../types";

const Card: FC<ChildrenType> = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
