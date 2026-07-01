import Title from "@/components/Title/Title";
import css from "./page.module.css";

import React from "react";
import HeaderWh from "@/components/HeaderWh/HeaderWh";
import { fetchfriends } from "@/lib/api/store/api";
import FriendsList from "@/components/FriendsList/FriendsList";
import PhoneHeader from "@/components/PhoneHeader/PhoneHeader";

const OurFriends = async () => {
  const friends = await fetchfriends();
  return (
    <div className={css.friendsConteiner}>
      <header className={css.dekstopHeader}>
        <HeaderWh />
      </header>
      <header className={css.mobileHeader}>
        <PhoneHeader />
      </header>

      <Title>Our friends</Title>
      <FriendsList friends={friends.data} />
    </div>
  );
};

export default OurFriends;
