import React from "react";
import Showcase from "../comps/showcase";
import Benefits from "../comps/benefits";
import Glance from "../comps/glance";
import PopularCourses from "../comps/popular-courses";
import Testimony from "../comps/testimony";
import NewsLetter from "../comps/newsletter";
import Footer from "../comps/footer";

function Index() {
  return (
    <div>
      <Showcase />
      <Benefits />
      <Glance />
      <PopularCourses />
      <Testimony />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Index;
