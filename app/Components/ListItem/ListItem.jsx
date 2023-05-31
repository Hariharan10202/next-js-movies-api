import React from "react";
import Image from "next/image";

import styles from "./ListItem.module.css";
import Interact from "../Interact/Interact";

const ListItem = ({ title }) => {
  return (
    <div className={styles.film} key={title.id}>
      <h6>{title.original_title}</h6>
      <div className={styles.ImageContainer}>
        <Image
          src={"https://image.tmdb.org/t/p/w500" + title.poster_path}
          alt={!title.poster_path ? "Missing" : title.poster_path}
          width={150}
          height={250}
          placeholder="blur"
          blurDataURL={"https://image.tmdb.org/t/p/w500" + title.poster_path}
          loading="lazy"
        />
      </div>
      <Interact title={title} />
    </div>
  );
};

export default ListItem;
