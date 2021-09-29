import { img_300, unavailable } from "../Config/Config.js";
import classes from "./SingleContent.module.css"
import SingleModal from "./SingleModal"


const SingleContent = (props) => {

  const d = new Date(props.date);
  const day = `${d.getDate()}`.padStart(2, 0)
  const month = d.toLocaleString('default', { month: 'long' });
  const year = d.getFullYear();
  const newDate = `${day} ${month} ${year}`

  return (
    <SingleModal key={props.id} 
    id={props.id}  
    media_type={props.media_type}
    >
      <div className={classes.stats}>
        <h1>{props.title}</h1>
        <h2>{newDate}</h2>
        <p>Ratings: {props.ratings}</p>
      </div>
      
      <div className={classes.imgHolder}>
        <img
          className={classes.poster}
          src={props.poster ? `${img_300}${props.poster}` : unavailable}
          alt={props.title}
        />
      </div>
    </SingleModal>
  );
};

export default SingleContent;