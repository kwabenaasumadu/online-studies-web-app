import React from "react";
import styles from "../../../styles/glance.module.css";
import SchoolIcon from "@mui/icons-material/School";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_items}>

          <div className={styles.container_items_1}>
            <SchoolIcon className={styles.icon} />

            <div className={styles.container_items_1_des}>
              <h1>90</h1>
              <p>success stories</p>
            </div>
          </div>

          <div className={styles.container_items_1}>
            <EmojiPeopleIcon className={styles.icon} />

            <div className={styles.container_items_1_des}>
              <h1>2</h1>
              <p>Trusted Tutors</p>
            </div>
          </div>

          <div className={styles.container_items_1}>
            <CalendarMonthIcon className={styles.icon} />

            <div className={styles.container_items_1_des}>
              <h1>1,020</h1>
              <p>schedules</p>
            </div>
          </div>

          <div className={styles.container_items_1}>
            <LocalLibraryIcon className={styles.icon} />

            <div className={styles.container_items_1_des}>
              <h1>3</h1>
              <p>courses</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
