import { Container } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import classes from "./MainPart.module.css"
import Trending from "../Pages/Trending/Trending";
import Movies from "../Pages/Movies/Movies";
import TVShows from "../Pages/TVShows/TVShows";
import Search from "../Pages/Search/Search";
import About from "../Pages/About/About";


const MainPart = () => {
    return (
        <div className={classes.app}>
        <Container>
            <Switch>
                <Route path="/" component={Trending} exact/>
                <Route path="/Movies" component={Movies} />
                <Route path="/TVShows" component={TVShows} />
                <Route path="/Search" component={Search} />
                <Route path="/About" component={About} />
            </Switch>
        </Container>
        </div>
    )
}

export default MainPart
