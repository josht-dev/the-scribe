import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, Divider, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 2
  },
  section: {
    position: 'absolute',
    top: '10rem',
    width: '75rem',
    height: '50rem',
    backgroundColor: '#fff',
    borderRadius: '.25rem',
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    zIndex: 3
  },
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <main style={styles.container}>
        <section style={styles.section}>
          <Box sx={{ width: "100%", background: "white" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                centered
                sx={{ indicatorColor: "red" }}
                
              >
                <Tab label="ARTIE" {...a11yProps(0)}  />
                <Divider orientation="vertical" variant="middle" />
                <Tab label="BRENDAN" {...a11yProps(1)} />
                <Divider orientation="vertical" variant="middle" />
                <Tab label="CHRISTIN" {...a11yProps(2)} />
                <Divider orientation="vertical" variant="middle" />
                <Tab label="JOSH" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div>
                <IconButton href="#">
                  <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton href="#">
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </div>
              Hey, I'm Artie! I'm a detail oriented web development student
              looking for a career in the technology industry. I love to work on
              a team to ensure that a nice, clean, and effiecient product is
              delivered to users, as I am quite the web user myself! I pick up
              new skills really fast, and I try to never stop learning something
              new.
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div>
                <IconButton href="h#">
                  <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton href="#">
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div>
                <IconButton href="h#">
                  <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton href="#">
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div>
                <IconButton href="h#">
                  <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton href="#">
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </div>
            </TabPanel>
          </Box>
        </section>
      </main>
    </>
  );
}
