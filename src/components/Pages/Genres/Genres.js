import axios from "axios";
import React, {useEffect} from "react";
import { Chip } from "@material-ui/core";

const Genres = (props) => {
    

    useEffect(() => {
        const fetchGenre = async () => {

        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${props.type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        props.setgenres(data.genres)    
        console.log(data.genres)    
    }
        fetchGenre();

        return () => {props.setgenres({})}
        // eslint-disable-next-line
    }, [])
    
    const handleAdd = (genre) => {
        props.setselectedgenres([...props.selectedgenres, genre])
        props.setgenres(props.genres.filter((g) => g.id !== genre.id))
        props.setpage(1)
    }

    const handleDelete = (genre) => {
        props.setgenres([...props.genres, genre])
        props.setselectedgenres(props.selectedgenres.filter((g) => g.id !== genre.id))
        props.setpage(1)
    }

    
    return (
        <div style={{paddingBottom: '0.5rem'}}>
            {props.selectedgenres && props.selectedgenres.map((genre, index) => 
            <Chip style={{margin: 3}}
                color="primary"
                id={genre.id}
                label={genre.name}
                clickable
                onDelete={() => handleDelete(genre)}
            />) }

            {props.genres && props.genres.map((genre, index) => 
            <Chip style={{margin: 3}}
                color="secondary"
                id={genre.id}
                label={genre.name}
                clickable
                onClick={() => handleAdd(genre)}
            />) }
        </div>
    )
}

export default Genres
