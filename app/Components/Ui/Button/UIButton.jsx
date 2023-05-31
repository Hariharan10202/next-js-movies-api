import React from "react";
import styles from "./UIButton.module.css";
import { useDispatch } from "react-redux";
import { Remove } from "@/app/Redux/moviesSlice";

const UIButton = ({ children, title, onClickEvent }) => {
  const dispatch = useDispatch();

  const ClickHandler = (title, onClickEvent) => {
    if (onClickEvent === "Add") {
      // router.push("movies");
    } else {
      dispatch(Remove(title));
    }
  };

  return (
    <button
      onClick={() => ClickHandler(title, onClickEvent)}
      className={styles.btn}
    >
      {children}
    </button>
  );
};

export default UIButton;
