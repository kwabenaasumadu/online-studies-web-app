import React from "react";
import styles from "../../../styles/showcase.module.css";
import Image from "next/image";
import FirstHeader from "../first-Header";
import SecondHeader from "../second-Header";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <FirstHeader />
        <SecondHeader />
        <div className={styles.container_items}>
          <div className={styles.container_items_1}>
            <span>welcome to cod e-learning</span>
            <h1>Best Online education expertise</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className={styles.container_btn}>
              <button>Get started now</button>
              <button>view course</button>
            </div>
          </div>

          <div className={styles.container_items_2}>
            <Image
              src="/11.png"
              alt="page_logo"
              width={500}
              height={500}
              className={styles.container_image}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
