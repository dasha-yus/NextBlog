import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.png"
          alt="A main image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I`m Dasha</h1>
      <p>I work as a web developer</p>
    </section>
  );
};

export default Hero;
