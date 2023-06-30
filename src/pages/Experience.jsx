import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
//import SchoolIcon from "@material-ui/icons/School";
//import WorkIcon from "@material-ui/icons/Work";
import { Work } from "@mui/icons-material";
import { School } from "@mui/icons-material";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Nigerian Navy Secondary School, calabar, Nigeria
          </h3>
          <p> Senior Secondary Certifcate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Uyo, Nigeria
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree (B.Eng)
          </h4>

          <p> Computer Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Back End Engineer - Ptouche WIFI Services
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Owerri, Imo State, Nigeria
          </h4>
          <p>Developed the backend infrastructure for 3 projects.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work/>}
        >
          <h3 className="vertical-timeline-element-title">
            Web Engineer - Aptech Nigeria
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lagos, Nigeria
          </h4>
          <p>
            Helped the team launch a major features by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
