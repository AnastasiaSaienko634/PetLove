"use client";
import React from "react";
import css from "./PhoneHeader.module.css";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const PhoneHeader = () => {
  const handleClick = () => {};
  return (
    <div className={css.header}>
      <Link href="/" className={css.logo}>
        petl
        <FaHeart className={css.logoIcon} />
        ve
      </Link>
      <button className={css.btn} onClick={handleClick}>
        <GiHamburgerMenu className={css.menuHambr} />
      </button>
    </div>
  );
};

export default PhoneHeader;
