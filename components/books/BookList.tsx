import { FC } from "react";
import type { BooklistType, BookDetailPropsType } from "../../types";

import BookItem from "./BookItem";
import classes from "./BookList.module.css";

const BookList: FC<BooklistType> = (props) => {

  return (
    <section>
      <h2>All Books</h2>
      <ul className={classes.list}>
        {props.bookList.map((book: BookDetailPropsType) => {
          return <BookItem key={book.isbn} {...book} />;
        })}
      </ul>
    </section>
  );
};

export default BookList;
