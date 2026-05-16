import css from "./page.module.css";

// Home Page
const Home = () => {
  return (
    <main className={css.main}>
      <div className={`${css.heroContainer} ${css.fadeUp}`}></div>
    </main>
  );
};

export default Home;
