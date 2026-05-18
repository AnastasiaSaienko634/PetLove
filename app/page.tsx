import css from "./page.module.css";
import background from "../public/backgroundImg.png";

// Home Page
const Home = () => {
  return (
    <main className={css.main}>
      <div className={`${css.heroContainer} ${css.fadeUp}`}>
        <img src={background} alt="" />
      </div>
    </main>
  );
};

export default Home;
