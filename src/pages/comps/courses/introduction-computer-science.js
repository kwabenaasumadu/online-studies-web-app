import React, { useState, useEffect } from "react";
import styles from "../../../styles/introduction-computer-science.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Introduction_computer_science() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_items}>
        
          <div className={styles.sidebar_container}>
            <div className={styles.sidebar_container_header}>
              <h1>Introduction to computer science</h1>
            </div>

            <div className={styles.sidebar_container_links}>
              <h1>Course 1</h1>
              <h1>Course 2</h1>
              <h1>Course 3</h1>
              <h1>Course 4</h1>
              <h1>Course 5</h1>
              <h1>Course 6</h1>
              <h1>Course 7</h1>
              <h1>Course 8</h1>
              <h1>Course 9</h1>
              <h1>Course 10</h1>
              <h1>Course 11</h1>
              <h1>Course 12</h1>
            </div>
          </div>

          <div className={styles.learning_container}>
            <div className={styles.learning_container_details}></div>
          </div>

          <div
            className={styles.menu_container}
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction_computer_science;
