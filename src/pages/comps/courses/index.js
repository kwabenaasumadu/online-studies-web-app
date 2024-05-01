import React, { useEffect, useState } from "react";
import styles from "../../../styles/courses.module.css";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { useRouter } from "next/router";
import Layout from "@/pages/layout";
import { ref, get } from "firebase/database";
import { auth, db } from "@/pages/api/firebase";
import withSession from "@/lib/session";

function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [responsiveIsVisible, setResponsiveIsVisible] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const router = useRouter();
  console.log(courseData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, "courses");
        const response = await get(dbRef);
        const data = response.val();

        if (data && typeof data === "object") {
          const dataArray = Object.entries(data).map(([key, value]) => ({
            key,
            ...value,
          }));
          setCourseData(dataArray);
        } else {
          setCourseData([]);
        }
      } catch (error) {
        console.error("Error fetching data:");
        setCourseData([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
      <Layout>
        <div className={styles.container}>
          <div className={styles.container_header}>
            <span>Our courses</span>
            <h1>Explore Online Courses</h1>
          </div>

          <div className={styles.container_items}>
            {courseData.map((course) => (
              <div className={styles.container_items_box} key={course.key}>
                <div className={styles.container_items_box_header}>
                  <LocalLibraryIcon
                    className={styles.container_items_box_icon}
                  />
                  <h1>{course?.CourseTitle || "Loading..."}</h1>
                </div>
                <div className={styles.tutor}>
                  <span>By: {course?.CourseTutor || "Loading..."}</span>
                </div>

                <div className={styles.price}>
                  <h1>{course?.CoursePrice || "Loading..."}</h1>
                </div>

                <div className={styles.container_items_box_button}>
                  <button onClick={() => router.push(course.link)}>
                    Enroll Now!
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Index;

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");
  if (!user) {
    return {
      redirect: {
        destination: "/comps/login",
        permanent: false,
      },
    };
  }

  if (user) {
    req.session.set("user", user);
    await req.session.save();
  }
  return {
    props: {
      user: user,
    },
  };
});
