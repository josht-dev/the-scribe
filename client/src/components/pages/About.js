import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main>
      {/* Contributors */}
      <div>
        <Link href="https://github.com/artiecannv" underline="hover">
          ARTIE
        </Link>
        <Link href="https://github.com/loudwhisperer" underline="hover">
          BRENDAN
        </Link>
        <Link href="https://github.com/porkchoppy" underline="hover">
          CHRISTIN
        </Link>
        <Link href="https://github.com/josht-dev" underline="hover">
          JOSH
        </Link>
      </div>
    </main>
  );
};

export default About;
