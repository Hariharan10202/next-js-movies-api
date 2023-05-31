import React from "react";
import styles from "./about.module.css";

const About = () => {
  console.log("About Renders");

  return (
    <div className={styles.container}>
      <h1>This is About</h1>
    </div>
  );
};

export default About;
