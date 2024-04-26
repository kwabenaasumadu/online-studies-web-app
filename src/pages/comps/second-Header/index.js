import React from "react";
import styles from "../../../styles/second-Header.module.css";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_items}>
          <div className={styles.menuIcon}>
            <MenuIcon />
            <h1>menu</h1>
          </div>
          <div className={styles.container_items_1}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
            <Link href="/" className={styles.link}>
              All Courses
            </Link>

            <Link href="/" className={styles.link}>
              About
            </Link>

            <Link href="/" className={styles.link}>
              Team
            </Link>

            <Link href="/" className={styles.link}>
              Pricing
            </Link>

            <Link href="/" className={styles.link}>
              Journal
            </Link>

            <Link href="/" className={styles.link}>
              Contact
            </Link>
          </div>

          <div className={styles.container_items_2}>
            <h1>GET certificate</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
