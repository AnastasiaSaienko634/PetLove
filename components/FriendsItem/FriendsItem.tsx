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
      <img src={friend.imageUrl} alt="photo" />
      <div className={css.rightSide}>
        <p className={css.workDaysFriend}></p>
        <h2 className={css.friendTitle}>{friend.title}</h2>
        <ul className={css.frienInfos}>
          <li>
            Email: <span>{friend.email}</span>
          </li>
          <li>
            Address: <span>{friend.address}</span>
          </li>
          <li>
            Phone: <span>{friend.phone}</span>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default FriendsItem;
