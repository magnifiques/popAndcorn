import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.header}>
          <span onClick={() => window.scrollTo(0,0)}>Pop And Corn</span> 
        </div>
    )
}

export default Header;