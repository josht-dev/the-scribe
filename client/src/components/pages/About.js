import * as React from "react";
import { Box, Tab } from "@mui/material/";
import { TabContext, TabList, TabPanel } from "@mui/lab/";

export default function About() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="ARTIE" value="1" />
            <Tab label="BRENDAN" value="2" />
            <Tab label="CHRISTIN" value="3" />
            <Tab label="JOSH" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          Hey, I'm Artie! I'm a detail oriented web development student looking
          for a career in the technology industry. I love to work on a team to
          ensure that a nice, clean, and effiecient product is delivered to
          users, as I am quite the web user myself! I pick up new skills really
          fast, and I try to never stop learning something new.
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">
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
