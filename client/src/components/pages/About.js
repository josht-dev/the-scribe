import React, { useState } from "react";
import Tab from "../Campaigns/Tab";
import GitHubLogo from "../../assets/icons/github-logo.svg";
import LinkedInLogo from "../../assets/icons/linkedin-logo.svg";

// Testing data
const devArray = [
  {
    id: 0,
    title: "ARTIE",
    gitHub: "https://github.com/artiecannv",
    linkedIn: "https://www.linkedin.com/in/arthur-cann-62b213248/",
    about:
      "Hey, I'm Artie! Located in Fort Collins, CO, I'm a detail oriented web development student looking for a career in the technology industry. I love to work on a team to ensure that a nice, clean, and effiecient product is delivered to users, as I am quite the web user myself! I pick up new skills really fast, and I try to never stop learning something new.",
  },
  {
    id: 1,
    title: "BRENDAN",
    gitHub: "https://github.com/loudwhisperer",
    linkedIn: "https://www.linkedin.com/in/brendan-borowski-886813230",
    about: "I am a young Full Stack Programmer self-taught and a recent graduate from the University of Denver Full Stack Bootcamp. I come from humble roots in South Florida and at a young age on my own dime all over America seeking out the ways different geographies ebb and flow. Long time game designer, I have spent my life playing and writing tabletop RPG's in the pursuit of fun inclusive times had with friends and will continue to dedicate my time and attention too both pursuits.",
  },
  {
    id: 2,
    title: "CHRISTIN",
    gitHub: "https://github.com/porkchoppy/",
    linkedIn: "https://www.linkedin.com/in/christin-carter-04a92544/",
    about: "I live in Longmont, CO with my two children and a plethora of various animals. Hobbies I enjoy include cooking, cross stitch, keeping exotic pets, and lifting weights. Having worked in administration/management for the bulk of my adult life, I decided to pursue a career switch with a web development bootcamp. It was there I found my love of SQL databases and I look forward to furthering my education and skillset. I love that coding is ever-evolving and there is always something new to learn.",
  },
  {
    id: 3,
    title: "JOSH",
    gitHub: "https://github.com/josht-dev",
    linkedIn: "https://www.linkedin.com/in/joshua-taylor-43ab14145",
    about: "My name is Josh Taylor, and I am originally from Tulsa, OK. My wife and I moved to Longmont, CO, in 2019 and never looked back! We love hiking with our 2 pups in the mountains and playing board games with friends. During the pandemic, I realized I had lost interest in my quality assurance job and started to contemplate other prospects. While I have a solid eye for detail that helps me in the QA role, I wanted to participate in the creation of something a bit more. Thus, in 2023 I will complete a certification in full-stack development. I am told that my strongest values are being honest, patient, and detail-oriented. I look forward to applying these values at my next opportunity!",
  },
];

// Styling object
const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    zIndex: 2,
  },
  section: {
    position: "absolute",
    top: "10rem",
    width: "75rem",
    height: "50rem",
    backgroundColor: "#fff",
    borderRadius: ".25rem",
    boxShadow:
      "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
    zIndex: 3,
  },
  titleDiv: {
    display: "flex",
    alignItems: "center",
    width: "75rem",
  },
  titleBtn: {
    margin: "0.5rem",
    padding: ".5rem 1.5rem",
    float: "left",
    backgroundColor: "#1CB9B3",
    boxShadow:
      "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
    borderRadius: "0.25rem",
    color: "#fff",
  },
  tabContainer: {
    margin: "0.5rem 0.5rem 0 0.5rem",
    display: "flex",
  },
  logoStyle: {
    display: "flex",
    justifyContent: "center",
  },
  imgStyle: {
    height: "4.6rem",
    width: "4.6rem",
    margin: "2rem"
  },
  aboutStyle: {},
};

function About() {
  // Current selected tab state
  const [currentTab, setCurrentTab] = useState("0");

  // Function to handle the tab change
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  // Render main content modal/page
  const renderPage = () => {
    const selectedDev = devArray[currentTab];
    console.log("SELECTED DEV: " + selectedDev);
    console.log(selectedDev);
    return (
      <>
        <div style={styles.logoStyle}>
          <a href={selectedDev.gitHub} target="_blank" rel="noreferrer">
            <img
              src={GitHubLogo}
              alt="GitHubIcon"
              style={styles.imgStyle}
            ></img>
          </a>
          <a href={selectedDev.linkedIn} target="_blank" rel="noreferrer">
            <img
              src={LinkedInLogo}
              alt="LinkedInIcon"
              style={styles.imgStyle}
            ></img>
          </a>
        </div>
        <p>{selectedDev.about}</p>
      </>
    );
  };

  console.log("CURRENT TAB: " + currentTab);

  // Return the large modal/page
  return (
    <main style={styles.container}>
      <section style={styles.section}>
        <>
          <div style={styles.titleDiv}>
            <span style={styles.titleBtn}>About the Devs</span>
          </div>
          <div style={styles.tabContainer} id="tabContainer">
            {devArray.map((item) => {
              return (
                <Tab
                  currentTab={currentTab}
                  handleTabChange={handleTabChange}
                  tab={item}
                  key={item.id}
                />
              );
            })}
          </div>
        </>
        {renderPage()}
      </section>
    </main>
  );
}

export default About;
