import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./TabPanel.scss";

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
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="Wizeline" {...a11yProps(0)} />
          <Tab label="Neon Domain" {...a11yProps(1)} />
          <Tab label="Laboratoria" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          <p>
            <p className="job-title">Software Engineer </p>
            <a
              href="https://www.wizeline.com/"
              rel="noreferrer"
              target="_blank"
            >
              @ Wizeline
            </a>
          </p>
          <p class="smaller">Jan 2022 - Present</p>
          <ul className="ul-list">
            <li>
              Actively participating in the development process throughout the
              software lifecycle using Scrum and Agile methodologies.
            </li>
            <li>
              Analysis of UX and design requirements and transforming it into
              functional components.
            </li>
            <li>Checking for errors and debugging websites.</li>
            <li>
              Developing with technologies such as Angular, ReactJS, Redux,
              Sass, REST, Git, HTML5, ES6, Bootstrap, Materialize, Node.js, and
              constantly learning new...
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <p>
            <p className="job-title">Front End Developer </p>
            <a href="https://neondomain.com/" rel="noreferrer" target="_blank">
              @ Neon Domain
            </a>
          </p>
          <p className="smaller">May 2020 - December 2021</p>
          <ul className="ul-list">
            <li>
              Development and implementation of software solutions based on
              client's requirements.
            </li>
            <li>
              Modifying and making changes according to client’s requirements.
            </li>
            <li>Checking for errors and debugging websites</li>
            <li>
              Improving existing design based on UX/UI principles and
              implementing responsive design for mobile devices.
            </li>
            <li>
              Developing with technologies such as Angular, Sass, REST, Git,
              HTML5, ES6, Bootstrap, etc.
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <p>
            <p className="job-title">Front End Developer Bootcamp </p>
            <a
              href="https://www.laboratoria.la/"
              rel="noreferrer"
              target="_blank"
            >
              @ Laboratoria
            </a>
          </p>
          <p className="smaller">October 2019 - May 2020</p>
          <ul className="ul-list">
            <li>Simulated work environment.</li>
            <li>Learning TDD using Jest and React-Testing-Library.</li>
            <li>
              Learning the basics of Agile, Scrum and Kanban methodologies,
              while applying it on the projects.
            </li>
            <li>
              Developing with technologies such as ReactJS, HTML5, CSS3,
              Firebase, Git, ES6, Bootstrap, etc.
            </li>
            <li>
              Best Project:{" "}
              <a
                href="https://laboratoriadiyers.firebaseapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                DIYers
              </a>
            </li>
          </ul>
        </div>
      </TabPanel>
    </Box>
  );
}
