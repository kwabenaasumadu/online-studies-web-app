import React, { useEffect, useState } from "react";
import styles from "../../../styles/popular-course.module.css";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { useRouter } from "next/router";

function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [responsiveIsVisible, setResponsiveIsVisible] = useState(false);
  const router = useRouter();

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
      if (window.scrollY >= 800) {
        setResponsiveIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function gotoIntroduction() {
    router.push("/comps/courses/introduction-computer-science");
  }

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
                <h1>Introduction to Computer Science</h1>
              </div>
              <div className={styles.tutor}>
                <span>By: Kwabena Asumadu</span>
              </div>

              <div className={styles.price}>
                <h1>$100 All Course / 15$ per month</h1>
              </div>

              <div className={styles.container_items_box_button}>
                <button onClick={gotoIntroduction}>Enroll Now!</button>
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
