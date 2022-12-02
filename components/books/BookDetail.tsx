import { FC } from "react";
import { useState, useEffect } from "react";
import type { BookDetailPropsType } from "../../types";
import classes from "./BookDetail.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { deleteBook, editBook } from "../../data/booksSlice";
import { useForm } from "../hooks/useForm";
import BookForm from "../elements/CustomForm";
import Notiflix from "notiflix";

const TIMEOUT = 800;

const BookDetail: FC<BookDetailPropsType> = (props) => {
  const [bookData, setBookData] = useState({ ...props });
  const booksDispatch = useDispatch();
  const router = useRouter();
  const { onChange, onSubmit, values } = useForm(editBookCallback, bookData);

  useEffect(() => {
    setBookData({ ...props });
  }, [props]);

  useEffect(() => {
    setBookData({ ...bookData, ...values });
  }, [values]);

  const handleDelete = () => {
    router.push("/");
    Notiflix.Notify.warning("The book was removed from the list", {
      timeout: TIMEOUT,
    });
    booksDispatch(deleteBook(bookData.isbn));
  };

  async function editBookCallback() {
    booksDispatch(editBook(values));
    Notiflix.Notify.success("The book was edited", {
      timeout: 800,
    });
  }

  return (
    <section className={classes.detail}>
      <button className={classes.removeButton} onClick={handleDelete}>
        Remove
      </button>
      <div className={classes.image}>
        <picture>
          <img src={bookData.image} alt={bookData.name} />
        </picture>
      </div>
      <BookForm
        editable={true}
        book={bookData}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </section>
  );
};

export default BookDetail;
