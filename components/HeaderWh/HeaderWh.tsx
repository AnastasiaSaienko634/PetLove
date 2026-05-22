import Link from "next/link";
import css from "./HeaderWh.module.css";
import { FaHeart } from "react-icons/fa";

const HeaderWh = () => {
  return (
    <div className={css.header}>
      <Link href="/" className={css.logo}>
        petl
        <FaHeart className={css.logoIcon} />
        ve
      </Link>
      <ul className={css.linkList}>
        <li>
          <Link className={css.listItem} href="">
            News
          </Link>
        </li>
        <li>
          <Link className={css.listItem} href="">
            Find pet
          </Link>
        </li>
        <li>
          <Link className={css.listItem} href="">
            Our friends
          </Link>
        </li>
      </ul>
      <div className={css.authorizationLinks}>
        <Link className={css.logInLink} href="">
          Log In
        </Link>
        <Link className={css.registrationLink} href="/register">
          Registration
        </Link>
      </div>
    </div>
  );
};

export default HeaderWh;
