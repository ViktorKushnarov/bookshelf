import { FC } from "react";
import { useForm } from "../hooks/useForm";
import classes from "./BookDetail.module.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addBook } from "../../data/booksSlice";
import BookForm from "../elements/CustomForm";
import Notiflix from "notiflix";

const TIMEOUT = 800;

const DEFAULT_IMG =
  "https://www.iconpacks.net/icons/2/free-opened-book-icon-3163-thumb.png";

const NewBookComponent: FC<{}> = () => {
  const booksDispatch = useDispatch();
  const router = useRouter();

  const initialState = {
    isbn: "",
    name: "",
    category: "",
    author: "",
    price: "",
    pages: "",
    description: "",
    website: "",
    image: "",
  };

  const { onChange, onSubmit, values } = useForm(
    createBookCallback,
    initialState
  );

  async function createBookCallback() {
    booksDispatch(addBook([values]));
    Notiflix.Notify.success("New Book was added", {
      timeout: TIMEOUT,
    });
    router.push("/");
  }

  return (
    <section className={classes.detail}>
      <div className={classes.image}>
        <picture>
          <img src={values.image || DEFAULT_IMG} alt={values.name} />
        </picture>
      </div>
      <BookForm onSubmit={onSubmit} onChange={onChange} />
    </section>
  );
};

export default NewBookComponent;
