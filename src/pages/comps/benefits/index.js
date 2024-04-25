import React, { useState, useEffect } from "react";
import styles from "../../../styles/benefits.module.css";
import Image from "next/image";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 18) {
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
        <div className={styles.container_items}>
          <div className={styles.container_items_1}>
            <Image
              src="/about.jpg"
              width={500}
              height={500}
              alt="benefits_img"
              className={styles.container_items_1_image}
            />
          </div>

          <div className={styles.container_items_2}>
            <div>
              <span>LEARN ANYTHING</span>
              <h1>Benefits About Online Learning Expertise</h1>

              {isVisible && (
                <div>
                  <div className={styles.container_items_2_box}>
                    <div className={styles.logo_container}>
                      <MenuBookIcon className={styles.logo} />
                    </div>
                    <div className={styles.container_items_2_box_details}>
                      <h1>Online Courses</h1>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>

                  <div className={styles.container_items_2_box}>
                    <div className={styles.logo_container}>
                      <MenuBookIcon className={styles.logo} />
                    </div>
                    <div className={styles.container_items_2_box_details}>
                      <h1>Online Courses</h1>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>

                  <div className={styles.container_items_2_box}>
                    <div className={styles.logo_container}>
                      <MenuBookIcon className={styles.logo} />
                    </div>
                    <div className={styles.container_items_2_box_details}>
                      <h1>Online Courses</h1>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
