export type InputPropsType = {
  value?: string;
  isTextarea?: boolean;
  id: string;
  name: string;
  type: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export type BookDetailPropsType = {
  isbn: string;
  name: string;
  category: string;
  author: string;
  price: string;
  pages: string;
  description: string;
  website: string;
  image: string;
};

export type BooklistType = { bookList: BookDetailPropsType[] };

export type OnSubmitFormType = React.FormEvent<HTMLFormElement>;

export type OnChangeType = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type ChildrenType = { children: React.ReactNode };

export type AddBookCallbackType = (enteredBookData: BookDetailPropsType) => any;

export type BookFormProps = {
  onChange: (event: OnChangeType) => void;
  onSubmit: (event: OnSubmitFormType) => void;
  book?: BookDetailPropsType;
  editable?: boolean;
};
