import { FC } from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import type { ChildrenType } from "../../types";

const Layout: FC<ChildrenType> = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
