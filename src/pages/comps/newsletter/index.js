import React from "react";
import styles from "../../../styles/newsletter.module.css";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_items}>
          <div className={styles.container_items_1}>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far way, behind the word mountainer</span>
          </div>

          <div className={styles.container_items_2}>
            <button>Click to join our whatsApp group</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
