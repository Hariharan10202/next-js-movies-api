"use client";

import React, { useEffect, useState } from "react";
// import styles from "./Interact.module.css";
import { FaRegHeart, FaHeart } from "react-icons/Fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import styles from "./Interact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BiCheck } from "react-icons/bi";
import { Add } from "@/app/Redux/moviesSlice";

const Interact = ({ title }) => {
  const [Like, setLike] = useState(false);
  const [add, setAdd] = useState(false);
  const [check, setCheck] = useState(false);

  const list = useSelector((state) => state.movieLists.data);

  useEffect(() => {
    let subscribe = true;
    if (subscribe) {
      setCheck(list.some((movie) => movie.id === title.id));
    }
    return () => {
      subscribe = false;
    };
  }, [title.id, list]);

  const dispatch = useDispatch();

  const addList = (title) => {
    setAdd(!add);
    dispatch(Add(title));
  };

  return (
    <div className={styles.Interact}>
      <span
        onClick={() => {
          setLike(!Like);
        }}
      >
        {Like ? (
          <FaHeart className={`${styles.Icon} ${styles.Like}`} />
        ) : (
          <FaRegHeart className={`${styles.Icon} ${styles.Like}`} />
        )}
      </span>
      {!add && !check ? (
        <IoAddCircleOutline
          onClick={() => addList(title)}
          className={`${styles.Icon} ${styles.Add}`}
        />
      ) : (
        <BiCheck className={styles.Icon} />
      )}
      <BsThreeDots className={`${styles.Icon} ${styles.More}`} />
    </div>
  );
};

export default Interact;
