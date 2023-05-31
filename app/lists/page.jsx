"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "./lists.module.css";
import Link from "next/link";
import { Remove } from "../Redux/moviesSlice";
import UIButton from "../Components/Ui/Button/UIButton";

const Lists = () => {
  console.log("Lists Renders");

  const list = useSelector((state) => state.movieLists.data);

  return (
    <div className={styles.container}>
      {list.length > 0 ? (
        list.map((title) => (
          <div className={styles.film} key={title.id}>
            <h6>{title.original_title}</h6>
            <div className={styles.ImageContainer}>
              <Image
                src={"https://image.tmdb.org/t/p/w500" + title.backdrop_path}
                alt={!title.poster_path ? "Missing" : title.backdrop_path}
                width={400}
                height={150}
                priority
                placeholder="blur"
                blurDataURL={
                  "https://image.tmdb.org/t/p/w500" + title.backdrop_path
                }
              />
              <div className={styles.removeBtn}>
                <UIButton onClickEvent={"Remove"} title={title}>
                  Discard
                </UIButton>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.emptyList}>
          <h1>Create a Personalized List</h1>
          <UIButton onClickEvent={"Add"}>Browse</UIButton>
        </div>
      )}
    </div>
  );
};

export default Lists;
