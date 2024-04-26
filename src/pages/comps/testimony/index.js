import React, { useState, useEffect } from "react";
import styles from "../../../styles/testimony.module.css";


function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
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
          <span>Testimonial</span>
          <h1>Our Successful Students</h1>
        </div>


        {isVisible && (
          <div className={styles.container_items}>
            <div className={styles.container_items_box}>
              <div className={styles.message}>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind
                  texts.Far far away, behind the word
                </p>
              </div>
              <div className={styles.header}>
                <h1>Kwabena Asumadu</h1>
              </div>
            </div>
            <div className={styles.container_items_box}>
              <div className={styles.message}>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind
                  texts.Far far away, behind the word
                </p>
              </div>
              <div className={styles.header}>
                <h1>Abena</h1>
              </div>
            </div>
            <div className={styles.container_items_box}>
              <div className={styles.message}>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind
                  texts.Far far away, behind the word
                </p>
              </div>
              <div className={styles.header}>
                <h1>Emmanuel Frimpong</h1>
              </div>
            </div>
            <div className={styles.container_items_box}>
              <div className={styles.message}>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind
                  texts.Far far away, behind the word
                </p>
              </div>
              <div className={styles.header}>
                <h1>Alexander Amankwaah</h1>
              </div>
            </div>
            <div className={styles.container_items_box}>
              <div className={styles.message}>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind
                  texts.Far far away, behind the word
                </p>
              </div>
              <div className={styles.header}>
                <h1>Kofi Adom</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Index;
