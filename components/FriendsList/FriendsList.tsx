import React from "react";
import css from "./FriendsList.module.css";
import FriendsItem from "../FriendsItem/FriendsItem";

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
  friends: Friend[];
}

const FriendsList = ({ friends }: Props) => {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendsItem friend={friend} key={friend._id} />
      ))}
    </ul>
  );
};

export default FriendsList;
