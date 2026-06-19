import React from "react";
import css from "./FriendsItem.module.css";

interface Friend {
  _id: string;
  title: string;
  email: string | null;
  phone: string | null;
  url: string | null;
  imageUrl: string;
  address: string | null;
  addressUrl: string | null;
  workDays: string | null;
}

interface Props {
  friend: Friend;
}

const FriendsItem = ({ friend }: Props) => {
  return (
    <li className={css.friendItem}>
      <img className={css.logofriend} src={friend.imageUrl} alt="photo" />
      <div className={css.rightSide}>
        <p className={css.workDaysFriend}>08:00 - 19:00</p>
        <h2 className={css.friendTitle}>{friend.title}</h2>
        <ul className={css.frienInfos}>
          {friend.email !== null && (
            <li className={css.friendLi}>
              Email: <span className={css.friendSpan}>{friend.email}</span>
            </li>
          )}
          {friend.address !== null && (
            <li className={css.friendLi}>
              Address:{" "}
              <span className={css.friendSpan}>
                {friend.address.length > 23
                  ? friend.address.slice(0, 16) + "..."
                  : friend.address}
              </span>
            </li>
          )}

          {friend.phone !== null && (
            <li className={css.friendLi}>
              Phone: <span className={css.friendSpan}>{friend.phone}</span>
            </li>
          )}
        </ul>
      </div>
    </li>
  );
};

export default FriendsItem;
