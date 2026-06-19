import Link from "next/link";
import css from "./Header.module.css";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <div className={css.header}>
      <Link href="/" className={css.logo}>
        petl
        <FaHeart className={css.logoIcon} />
        ve
      </Link>
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
  );
};

export default Header;
