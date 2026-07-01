"use client";

import React, { useState } from "react";
import css from "./PhoneHeader.module.css";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const PhoneHeader = () => {
  const [visiableModal, setVisiableModal] = useState(false);
  const handleClick = () => {
    setVisiableModal(true);
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
          <div className={css.header}>
            <ul className={css.linkList}>
              <li>
                <Link className={css.listItem} href="/news">
                  News
                </Link>
              </li>
              <li>
                <Link className={css.listItem} href="">
                  Find pet
                </Link>
              </li>
              <li>
                <Link className={css.listItem} href="/friends">
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
        </div>
      )}
    </>
  );
};

export default PhoneHeader;
