import type { NextPage } from "next";
import type { RootState } from "../store";
import { useSelector } from "react-redux";
import BookList from "../components/books/BookList";

const Home: NextPage = () => {
  const bookList = useSelector((state: RootState) => state.bookList.bookList);

  return <BookList bookList={bookList} />;
};

export default Home;
