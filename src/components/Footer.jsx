import React from "react";
//import TwitterIcon from "@material-ui/icons/Twitter";
//import FacebookIcon from "@material-ui/icons/Facebook";
//import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Instagram } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram/>
        <Twitter />
        <Facebook />
        <LinkedIn />
      </div>
      <p> &copy; 2023 StanityTech</p>
    </div>
  );
}

export default Footer;
