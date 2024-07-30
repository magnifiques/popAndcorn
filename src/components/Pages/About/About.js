import React from "react"
import tacos from "./tacos.gif"
import classes from "./About.module.css"
import pizza from "./pizza.gif"
import banana from "./banana.gif"
const About = () => {

    const myself = {
        username: "magnifiques",
        gitlink: "https://github.com/magnifiques"
    }
    const jeet = {
        username: "JeetPatel1016",
        gitlink: "https://github.com/JeetPatel1016"
    }

    return (
        <div className={classes.mainContainer}>
            <h1>About This Project</h1>
            <div className={classes.aboutMe}>
                <div className={classes.introAbout}>
                    <img src={tacos} alt='tacos' className={classes.tacos}/>
                    <p>PopAndCorn has solely made by me. All the rights belong to the respective content holders.
                    Thanks to TMdb for providing the great api functionalities.</p>
                </div>
                <div className={classes.introAbout}>
                    <img src={pizza} alt="pizza" classname={classes.pizza}/>
                    <p>Hi there! I'm really glad you took the time to see my project. I love web development and enjoy making unique projects. I hope you like what I've created, and I'd appreciate any feedback you have. Have a great day!</p>
                </div>
                <div className={classes.introAbout}>
                    <img src={banana} alt="banana" className={classes.banana}/>
                    <p>My Github Link: <a href={myself.gitlink} target="__blank">@{myself.username}</a><br/>
                        <br />
                        Very Special thanks to my homie {jeet.username} for helping me out in CSS and Designing.<br />
                        <br />
                        His Github link: <a href={jeet.gitlink} target="__blank">@{jeet.username}</a></p>
                </div>
        </div>
    </div>
    )
}

export default About
