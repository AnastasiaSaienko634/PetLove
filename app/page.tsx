import Image from "next/image";
import css from "./page.module.css";
import background from "../public/backgroundImg.png";
import Header from "@/components/Header/Header";

// Home Page
const Home = () => {
  return (
    <main className={css.main}>
      <div className={css.mainContainer}>
        <div className={css.heroContainer}>
          <Header />
          <div className={css.textHero}>
            <h1 className={css.titleHero}>
              Take good <span className={css.markedText}>care</span> of your
              small pets
            </h1>
            <p className={css.descriptionHero}>
              Choosing a pet for your home is a choice that is meant to enrich
              your life with immeasurable joy and tenderness.
            </p>
          </div>
        </div>
        <Image
          className={css.backgroundImg}
          src={background}
          alt="Background"
          priority
        />
      </div>
    </main>
  );
};

export default Home;
