"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();

  console.log("Navbar Renders");

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.Items}>
          <span className={pathname === "/" ? styles.active : ""}>
            <Link href="/">Home</Link>
          </span>
          <span className={pathname === "/movies" ? styles.active : ""}>
            <Link href="/movies">Movies</Link>
          </span>
          <span className={pathname === "/lists" ? styles.active : ""}>
            <Link href="/lists">Lists</Link>
          </span>
          <span className={pathname === "/about" ? styles.active : ""}>
            <Link href="/about">About</Link>
          </span>
          <span className={pathname === "/contact" ? styles.active : ""}>
            <Link href="/contact">Contact</Link>
          </span>
          <span className={pathname === "/signin" ? styles.active : ""}>
            <Link href="/signin">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
