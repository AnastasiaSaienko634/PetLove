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
    </div>
  );
};

export default Header;
