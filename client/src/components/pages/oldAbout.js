import * as React from "react";
import { Box, Tab, Divider, IconButton } from "@mui/material/";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function About() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value} textColor="#1CB9B3">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="ARTIE" value="1" />
            <Divider orientation="vertical" variant="middle" />
            <Tab label="BRENDAN" value="2" />
            <Divider orientation="vertical" variant="middle" />
            <Tab label="CHRISTIN" value="3" />
            <Divider orientation="vertical" variant="middle" />
            <Tab label="JOSH" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
            <IconButton href="https://github.com/artiecannv">
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/arthur-cann-62b213248/">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </div>
          Hey, I'm Artie! I'm a detail oriented web development student looking
          for a career in the technology industry. I love to work on a team to
          ensure that a nice, clean, and effiecient product is delivered to
          users, as I am quite the web user myself! I pick up new skills really
          fast, and I try to never stop learning something new.
        </TabPanel>
        <TabPanel value="2">
          <div>
            <IconButton href="https://github.com/loudwhisperer">
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton href="#">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </div>
          I am a young Full Stack Programmer self-taught and a recent graduate
          from the University of Denver Full Stack Bootcamp. I come from humble
          roots in South Florida and at a young age on my own dime all over
          America seeking out the ways different geographies ebb and flow. Long
          time game designer, I have spent my life playing and writing tabletop
          RPG's in the pursuit of fun inclusive times had with friends and will
          continue to dedicate my time and attention too both pursuits.
        </TabPanel>
        <TabPanel value="3">
          <div>
            <IconButton href="https://github.com/porkchoppy/">
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton href="#">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </div>
          Just some nerdy girl who is learning to code and loves jumping
          spiders. I live in Longmont, CO with my husband, our two children, and
          a plethora of pets. Hobbies I enjoy include cooking, reading, cross
          stitch, and walking. My coding adventure has just begun, and I look
          forward to learning so much more.
        </TabPanel>
        <TabPanel value="4">
          <div>
            <IconButton href="https://github.com/josht-dev">
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton href="#">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </div>
          My name is Josh Taylor, and I am originally from Tulsa, OK. My wife
          and I moved to Longmont, CO, in 2019 and never looked back! We love
          hiking with our 2 pups in the mountains and playing board games with
          friends. During the pandemic, I realized I had lost interest in my
          quality assurance job and started to contemplate other prospects.
          While I have a solid eye for detail that helps me in the QA role, I
          wanted to participate in the creation of something a bit more. Thus,
          in 2023 I will complete a certification in full-stack development. I
          am told that my strongest values are being honest, patient, and
          detail-oriented. I look forward to applying these values at my next
          opportunity!
        </TabPanel>
      </TabContext>
    </Box>
  );
}
