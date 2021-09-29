import {React, useState, useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300, noPicture } from "../Config/Config.js";
import axios from 'axios';
import classes from "./Carousel.module.css"
const handleDragStart = (e) => e.preventDefault();


const Carousel = (props) => {
  
    const [credits, setCredits] = useState([]);

    const responsive = {
        0: {
          items: 3,
        },
        512: {
          items: 5,
        },
        1024: {
          items: 7,
        },
      };
    
    const fetchCredits = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/${props.media_type}/${props.id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setCredits(data.cast);
      };
    
  const items = credits?.map((c) => (
    <div className={classes.carouselItem}>
      <img
        src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        onDragStart={handleDragStart}
        className={classes.carouselItemImg}
      />
      <b className={classes.names}>{c?.name}</b>
    </div>
  ));
  
  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);
  
    return (
    <AliceCarousel 
    mouseTracking 
    items={items} 
    responsive={responsive}
    disableButtonsControls
    disableDotsControls
    />
  );
}

export default Carousel