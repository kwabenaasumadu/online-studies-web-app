import React, { useState, useEffect } from "react";
import styles from "../../../styles/second-Header.module.css";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_items}>
          <div className={styles.menuIcon} onClick={() => setIsMenuOpen(true)}>
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

      {isMenuOpen && (
        <>
          <div className={styles.menu_container}>
            <div
              className={styles.menu_container_close}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Close</span>
              <CloseIcon className={styles.icon} />
            </div>

            <div className={styles.menu_container_links}>
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

            <div className={styles.menu_container_footer}>
              <h1>Cod E-learning</h1>
              <span>Online education & learning</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Index;
