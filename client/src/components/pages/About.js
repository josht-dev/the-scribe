import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main>
      {/* Contributors */}
      <Grid container>
        <Grid item>
          <Link href="https://github.com/artiecannv" underline="hover">
            ARTIE
          </Link>
        </Grid>
        <Divider orientation="vertical" flexItem>
          VERTICAL
        </Divider>
        <Grid item>
          <Link href="https://github.com/loudwhisperer" underline="hover">
            BRENDAN
          </Link>
        </Grid>
        <Divider orientation="vertical" flexItem>
          VERTICAL
        </Divider>
        <Grid item>
          <Link href="https://github.com/porkchoppy" underline="hover">
            CHRISTIN
          </Link>
        </Grid>
        <Divider orientation="vertical" flexItem>
          VERTICAL
        </Divider>
        <Grid item>
          <Link href="https://github.com/josht-dev" underline="hover">
            JOSH
          </Link>
        </Grid>
      </Grid>
    </main>
  );
};

export default About;
