import React, { useState, useEffect } from "react";
import styles from "./../../../styles/learn-page.module.css";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";

function Index() {
  const [courseInfo, setCourseInfo] = useState({});
  const [selectedCourse, setSelectedCourse] = useState(null);
  const router = useRouter();
  const { courseData } = router.query;
  const parsedCourseData = courseData ? JSON.parse(courseData) : null;

  useEffect(() => {
    if (parsedCourseData) {
      setCourseInfo(parsedCourseData);
    }
  }, [parsedCourseData]);

  const handleCourseClick = (courseKey) => {
    setSelectedCourse(courseKey);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_header}>
          <h1>{`Welcome ${courseInfo?.CourseTitle}`}</h1>
        </div>

        <div className={styles.container_nav}>
          {Object.entries(courseInfo?.SubCourses || {}).map(([key, value]) => (
            <h1 key={key} onClick={() => handleCourseClick(key)}>
              Course {value.Course}
            </h1>
          ))}
        </div>

        <div className={styles.container_content_container}>
          {selectedCourse && (
            <div className={styles.container_content}>
              <div className={styles.container_content_title}>
                <h1>{` ${courseInfo?.SubCourses[selectedCourse].courseBodyTitle}`}</h1>
              </div>

              <div className={styles.container_content_body_video}>
                <iframe
                  width="424"
                  height="540"
                  src={`${courseInfo?.SubCourses[selectedCourse].courseVideo}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>

              <div className={styles.container_content_body}>
                <p>{courseInfo?.SubCourses[selectedCourse].courseBody}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Index;
