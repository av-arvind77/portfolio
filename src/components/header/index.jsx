import React from "react";

import imgSrc from "../../images/picture.jpg";
import Socials from "../socials";

import classes from "./header.module.css";

import useSiteMetadata from '../../hooks/use-site-metadata'

const Header = () => {

  const { siteURL } = useSiteMetadata();
  
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.profileWrapper}>
        <img
          className={classes.profilePicture}
          src={`${siteURL}${imgSrc}`}
          alt="Arvind Pradhan"
        />
      </div>
      <div className={classes.profileContent}>
        <h1>Arvind Pradhan</h1>
        <h2>Android Developer based in Bangalore, India.</h2>
        <Socials />
      </div>
    </div>
  );
};

export default Header;
