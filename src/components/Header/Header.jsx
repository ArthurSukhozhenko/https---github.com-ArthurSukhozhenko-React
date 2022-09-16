import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <a className={s.link} href='/profile'><h1>Ukraine</h1></a>
    </header>
  );
};

export default Header;
