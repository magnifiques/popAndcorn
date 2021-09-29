import axios from "axios"
import React, { useEffect, useState } from "react"
import SingleContent from "../../SingleContent/SingleContent"
import classes from "../CommonCSS.module.css"
import CustomPagination from "../../Pagination/CustomPagination"

const Trending = () => {

    const [content, setcontent] = useState([])
    const [page, setpage] = useState(1);

  useEffect(() => {
    const fetchTrending = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);      
        setcontent(data.results);
    }
      fetchTrending()
  }, [page])

    return (
        <div className={classes.setting}>
        <h1>Trending Shows</h1>
        
        <div className={classes.trending}> 
           {content.map((movie, index) => 
            <SingleContent  key={movie.id} 
            id={movie.id} 
            poster={movie.poster_path} 
            title={movie.title || movie.name}
            date={movie.first_air_date || movie.release_date} 
            media_type={movie.media_type}
            ratings={movie.vote_average} />)}
        </div>
        <CustomPagination setpage={setpage}/>
        </div>
    )
}

export default Trending;