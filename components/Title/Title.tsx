import React from "react";
import css from "./Title.module.css";

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return <h1 className={css.title}>{children}</h1>;
};

export default Title;
