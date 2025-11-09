import React from "react";

//Icons
import google from "../assents/google.svg";
//styles
import styles from "../components/Login.module.css";

const Login = () => {
  return (
    <>
      <div className={styles.Loginpage}>
        <div className={styles.Logincard}>
          <h2>Welcom to ChatApp !</h2>
          <div className={styles.button}>
            <img src={google} alt="logo google" /> sign with to google
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
