import axios from "axios"
import { ThemeProvider } from "@material-ui/styles";
import { Button, TextField } from "@material-ui/core";
import { createTheme } from "@material-ui/core";   
import React, {useState, useEffect} from "react"
import classes from "../CommonCSS.module.css"
import SearchIcon from '@material-ui/icons/Search';
import moreClasses from "./moreClasses.module.css"
import { Tab, Tabs } from "@material-ui/core";
import SingleContent from "../../SingleContent/SingleContent"
import CustomPagination from "../../Pagination/CustomPagination"

const Search = (props) => {

    const [type, settype] = useState(0)
    const [page, setpage] = useState(1)
    const [searchtext, setsearchtext] = useState("")
    const [content, setcontent] = useState()
    const [numOfPages, setNumOfPages] = useState();


    const handlechange = (event, newvalue) => {
        settype(newvalue)
        setpage(1)
    }

    const fetchSearch = async () => {

        window.scroll(0, 0)

        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchtext}&page=${page}&include_adult=false`
            )
            setcontent(data.results);
            setNumOfPages(data.total_pages)
        }
        catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchSearch() 
        // eslint-disable-next-line  
    }, [type, page])

    const darktheme = createTheme({
        palette:{
            type: "dark",
            primary:{
                main:"#f0f0f0",
                secondary:"#787A91"
            }
        }

    })
    return (
        <div className={classes.setting}>
            <h1>Search</h1>
            <ThemeProvider theme={darktheme}>
            <div className={moreClasses.search}>
                    <TextField
                        style={{flex: 1}}
                        className="searchBox"
                        onChange={(e) => setsearchtext(e.target.value)}
                    />
                <Button variant="contained" style={{marginLeft:10}} onClick={fetchSearch}> <SearchIcon/> </Button>
                </div>
                <Tabs style={{paddingBottom: 5}} value={type} onChange={handlechange} centered>
                    <Tab style={{width: "100%"}} label="Search Movies"/>
                    <Tab style={{width: "100%"}} label="Search Tv Shows"/>
                </Tabs>
                </ThemeProvider>
                <div className={classes["trending_search"]}>
                     {content &&
                      content.map((c) => (
                        <SingleContent
                         key={c.id}
                         id={c.id}
                         poster={c.poster_path}
                         title={c.title || c.name}
                         date={c.first_air_date || c.release_date}
                         media_type={type ? "tv" : "movie"}
                         ratings={c.vote_average}
                        />
                        ))}
        {searchtext &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setpage={setpage} numOfPages={numOfPages}/>
      )}
        </div>
    )
}

export default Search
