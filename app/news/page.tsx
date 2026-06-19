import React from "react";
import HeaderWh from "@/components/HeaderWh/HeaderWh";
import css from "./page.module.css";
import Title from "@/components/Title/Title";
import { fetchnews } from "@/lib/api/store/api";
import NewsItem from "@/components/NewsItem/NewsItem";

const News = async () => {
  const news = await fetchnews();
  return (
    <div className={css.newsContainer}>
      <HeaderWh />
      <Title>News</Title>
      {/* {news.results.map((new)=> (<NewsItem  key={new.id}/>))} */}
    </div>
  );
};

export default News;
