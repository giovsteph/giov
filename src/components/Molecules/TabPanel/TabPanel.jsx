import * as React from "react";
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
      className="tabPanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className="box"
      sx={{
        width: "100%",
        flexGrow: 1,
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        textColor="secondary"
        indicatorColor="secondary"
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Wizeline" {...a11yProps(0)} />
        <Tab label="Neon Domain" {...a11yProps(1)} />
        <Tab label="Laboratoria" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div>
          <p>
            Software Engineer{" "}
            <a
              href="https://www.wizeline.com/"
              rel="noreferrer"
              target="_blank"
            >
              @ Wizeline
            </a>{" "}
          </p>
          <p>Jan 2022 - Present</p>
          <ul>
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
            Front End Developer{" "}
            <a href="https://neondomain.com/" rel="noreferrer" target="_blank">
              @ Neon Domain
            </a>{" "}
          </p>
          <p>May 2020 - December 2021</p>
          <ul>
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
              implementing responsive design for mobiledevices.
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
            Front End Developer Bootcamp{" "}
            <a
              href="https://www.laboratoria.la/"
              rel="noreferrer"
              target="_blank"
            >
              @ Laboratoria
            </a>{" "}
          </p>
          <p>October 2019 - May 2020</p>
          <ul>
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
