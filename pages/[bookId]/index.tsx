import { FC } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import type { RootState } from "../../store";
import BookDetail from "../../components/books/BookDetail";
import type { BookDetailPropsType } from "../../types";

const BookDetails: FC<{}> = () => {
  const router = useRouter();
  const { bookId } = router.query;

  const bookList = useSelector((state: RootState) => state.bookList.bookList);
  const book = bookList.find((d) => d.isbn === bookId);

  return (
    <section>
      <h2>{book && `Book: ${book.name}`}</h2>
      <BookDetail {...(book as BookDetailPropsType)} />
    </section>
  );
};

export default BookDetails;
