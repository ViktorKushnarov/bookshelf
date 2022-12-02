import { FC } from "react";
import classes from "./MainNavigation.module.css";
import Link from "next/link";

const MainNavigation: FC<{}> = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Book Shelf</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Books</Link>
          </li>
          <li>
            <Link href="/addBook">Add Book</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
