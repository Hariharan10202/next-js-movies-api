"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "primereact/button";

import styles from "./SignIn.module.css";
import InputComponent from "../Components/Ui/Input/Input";

import { FcGoogle } from "react-icons/fc";
import PageSpinner from "../Components/PageSpinner/PageSpinner";

const Login = () => {
  const { data: session, status } = useSession();

  console.log(status);

  const SignInHandler = () => {
    signIn("google");
  };
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  if (status === "loading") {
    return (
      <div style={style}>
        <PageSpinner />
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <>
        <div className={styles.Login}>
          {/* <Button onClick={() => signOut()}>Sign Out</Button> */}
        </div>
      </>
    );
  }
  return (
    <div className={styles.Login}>
      <div className={styles.inputField}>
        <h1>Sign In</h1>
        <InputComponent id={"username"} placeholder={"Username"} type="input" />
        <InputComponent
          id={"password"}
          placeholder={"Password"}
          type="password"
        />
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "red",
            border: "none",
          }}
        >
          Sign In
        </Button>
        <div className={styles.line}>
          <span></span>or
          <span></span>
        </div>
        <Button
          onClick={SignInHandler}
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
            gap: "10px",
          }}
        >
          Sign in with Google <FcGoogle />
        </Button>
      </div>
    </div>
  );
};

export default Login;
