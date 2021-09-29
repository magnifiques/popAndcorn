import React, {useEffect, useState} from "react"
import axios from "axios"
import classes from "../CommonCSS.module.css"
import Genres from "../Genres/Genres"
import SingleContent from "../../SingleContent/SingleContent"
import CustomPagination from "../../Pagination/CustomPagination"
import useGenre from "../../../hooks/useGenre"


const TVShows = () => {

    const [content, setcontent] = useState([])
    const [page, setpage] = useState(1)
    const [numOfPages, setnumOfPages] = useState()
    const [selectedgenres, setselectedgenres] = useState([])
    const [genres, setgenres] = useState([])
    const genreforURL = useGenre(selectedgenres)

    useEffect(() => {
        const fetchTvshows = async () => {
            const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
            console.log(data)
            setcontent(data.results)
            setnumOfPages(data.total_pages)
        }

        fetchTvshows()
    }, [page, genreforURL])


    return (
            <div className={classes.setting}>
            <h1>Tv Shows</h1>
            <Genres type='tv'
                selectedgenres={selectedgenres}
                genres={genres}
                setgenres={setgenres}
                setselectedgenres={setselectedgenres}
                setpage={setpage} 
            />
            <div className={classes.trending}> 
                {content.map((movie, index) => 
                <SingleContent  key={movie.id} 
                    id={movie.id} 
                    poster={movie.poster_path} 
                    title={movie.title || movie.name}
                    date={movie.first_air_date || movie.release_date} 
                    media_type='tv'
                    ratings={movie.vote_average} />)}
            </div>
                <CustomPagination setpage={setpage} numOfPages={numOfPages}/>
            </div>  
    )
}

export default TVShows
