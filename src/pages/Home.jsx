import React from "react";
//import LinkedInIcon from "@material-ui/icons/LinkedIn";
//import EmailIcon from "@material-ui/icons/Email";
//import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { LinkedIn, Email, GitHub } from "@mui/icons-material";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Stanley Ajaero</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedIn />
          <Email />
          <GitHub/>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              MySQL, MongoDB, Django
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;


//rukky