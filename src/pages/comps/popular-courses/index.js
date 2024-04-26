import React, { useEffect, useState } from "react";
import styles from "../../../styles/popular-course.module.css";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [responsiveIsVisible, setResponsiveIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setResponsiveIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_header}>
          <span>Our courses</span>
          <h1>Explore Our Popular Online Courses</h1>
        </div>
        {isVisible && (
          <div className={styles.container_items}>
            <div
              className={`${styles.container_items_box} ${
                responsiveIsVisible ? styles.container_items_box_responsive : ""
              }`}
            >
              <div className={styles.container_items_box_header}>
                <LocalLibraryIcon className={styles.container_items_box_icon} />
                <h1>Basics Fundamentals For Software Engineer</h1>
              </div>
              <div className={styles.tutor}>
                <span>By: Kwaben Asumadu</span>
              </div>

              <div className={styles.price}>
                <h1>$100 All Course / 15$ per month</h1>
              </div>

              <div className={styles.container_items_box_button}>
                <button>Enroll Now!</button>
              </div>
            </div>

            <div className={styles.container_items_box}>
              <div className={styles.container_items_box_header}>
                <LocalLibraryIcon className={styles.container_items_box_icon} />
                <h1>Basics Fundamentals For Software Engineer</h1>
              </div>
              <div className={styles.tutor}>
                <span>By: Kwaben Asumadu</span>
              </div>

              <div className={styles.price}>
                <h1>$100 All Course / 15$ per month</h1>
              </div>

              <div className={styles.container_items_box_button}>
                <button>Enroll Now!</button>
              </div>
            </div>

            <div className={styles.container_items_box}>
              <div className={styles.container_items_box_header}>
                <LocalLibraryIcon className={styles.container_items_box_icon} />
                <h1>Basics Fundamentals For Software Engineer</h1>
              </div>
              <div className={styles.tutor}>
                <span>By: Kwaben Asumadu</span>
              </div>

              <div className={styles.price}>
                <h1>$100 All Course / 15$ per month</h1>
              </div>

              <div className={styles.container_items_box_button}>
                <button>Enroll Now!</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Index;
