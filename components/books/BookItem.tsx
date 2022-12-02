import { FC } from "react";
import Link from "next/link";
import Card from "../ui/Card";
import classes from "./BookItem.module.css";
import type { BookDetailPropsType } from "../../types";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../data/booksSlice";
import Notiflix from "notiflix";

const TIMEOUT = 800;

const BookItem: FC<BookDetailPropsType> = (props) => {
  const booksDispatch = useDispatch();

  const handleDelete = () => {
    booksDispatch(deleteBook(props.isbn));
    Notiflix.Notify.warning("The book was removed from the list", {
      timeout: TIMEOUT,
    });
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <picture>
            <img src={props.image} alt={props.name} />
          </picture>
        </div>
        <div className={classes.content}>
          <Link href={"/" + props.isbn}>
            <h2>Title: {props.name}</h2>
          </Link>
          <h4>Author: {props.author}</h4>
          <h5>Category: {props.category}</h5>
          <h4>{props.price}</h4>
        </div>
        <div className={classes.delete}>
          <button onClick={handleDelete}>Remove from the list</button>
        </div>
      </Card>
    </li>
  );
};

export default BookItem;
