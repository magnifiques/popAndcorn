import React from "react"
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import classes from "./CustomPagination.module.css"

const theme = createTheme({
    palette: {
      type: "dark"
  }
});

const CustomPagination = ({setpage, numOfPages= 10}) => {

    const pageChangeHandler = (page) => {
        window.scroll(0, 0)
        setTimeout(setpage(page), 5000);
        
    }

    return (
        <div className={classes.pagination}>
        <ThemeProvider theme={theme}>
            <Pagination color="secondary" 
            size="large" 
            count={numOfPages}
            onChange={(e) => pageChangeHandler(e.target.textContent)} 
            hideNextButton
            hidePrevButton
            />
        </ThemeProvider>
        </div>
    )
}

export default CustomPagination
