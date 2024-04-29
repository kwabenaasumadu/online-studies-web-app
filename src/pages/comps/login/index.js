import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../../../styles/login.module.css";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Link from "next/link";
import Image from "next/image";

function Index() {
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  return (
    <>
      {isButtonClicked && (
        <>
          <div className={styles.circle_container}>
            <div className={styles.circle}></div>
            <span>Please wait...</span>
          </div>
        </>
      )}
      <Head>
        <title>Please Sign In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.container_items}>
          <div className={styles.container_login}>
            <h2>Login to your account</h2>
          </div>

          <div className={styles.container_form}>
            <form>
              <div className={styles.container_form_input}>
                <label>Username</label>
                <input type="text" id="username" name="user_name" required />
              </div>

              <div className={styles.container_form_input}>
                <label>Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="user_password"
                  required
                />
                {showPassword ? (
                  <VisibilityOffOutlined
                    className={styles.VisibilityIcon}
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <VisibilityOutlinedIcon
                    className={styles.VisibilityIcon}
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>

              <div className={styles.container_forget_password}>
                <Link href="">Forget Password?</Link>
              </div>

              <button type="submit" className={styles.login_btn}>
                Login
              </button>
            </form>
          </div>
        </div>
        <div className={styles.footer_container}>
          <p>
            &copy;{new Date().getFullYear()} - Cod E-Learning | All Rights
            Reserved
          </p>
        </div>
      </div>
      <NotificationContainer />
    </>
  );
}

export default Index;
