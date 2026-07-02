"use client";

import React, { useState } from "react";
import css from "./PhoneHeader.module.css";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const PhoneHeader = () => {
  const [visiableModal, setVisiableModal] = useState(false);
  const handleClick = () => {
    setVisiableModal(true);
  };

  const handleClose = () => {
    setVisiableModal(false);
  };

  return (
    <>
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

      {visiableModal && (
        <div className={css.modal}>
          <button className={css.closebtn} onClick={handleClose}>
            <IoMdClose className={css.closeIcon} />
          </button>
          <ul className={css.linkList}>
            <li>
              <Link className={css.listItemNews} href="/news">
                News
              </Link>
            </li>
            <li>
              <Link className={css.listItemPet} href="">
                Find pet
              </Link>
            </li>
            <li>
              <Link className={css.listItemFriend} href="/friends">
                Our friends
              </Link>
            </li>
          </ul>
          <div className={css.authorizationLinks}>
            <Link className={css.logInLink} href="/login">
              Log In
            </Link>
            <Link className={css.registrationLink} href="/register">
              Registration
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneHeader;
