import { FC } from "react";
import NewBookComponent from "../../components/books/NewBookComponent";

const AddBook: FC<{}> = () => {
  return (
    <section>
      <h2>Add Your Book</h2>
      <NewBookComponent />
    </section>
  );
};
export default AddBook;
