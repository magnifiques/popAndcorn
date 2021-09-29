import { React, useState, useEffect }from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import cssClass from "./SingleContent.module.css"
import { img_300, img_500, unavailable, unavailableLandscape } from "../Config/Config.js";
import { Button } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import modalCSS from "./SingleModal.module.css"
import Carousel from "../Carousel/Carousel"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "transparent",
    color: "white",
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function SingleModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setcontent] = useState([])
  const [video, setvideo] = useState()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${props.media_type}/${props.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setcontent(data)
    
  }

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${props.media_type}/${props.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setvideo(data.results[0]?.key)
  };


  useEffect(() => {
    fetchData()
    fetchVideo()
    // eslint-disable-next-line
  }, [])

  
  return (
    <>
      <div type="button" className={cssClass.media} onClick={handleOpen}>
      {props.children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            {content && 
            <div className={classes.paper}>
                <div className={modalCSS.ContentModal}>

                  { <img className={modalCSS.ContentModalPortrait}
                  src={content.poster_path ? 
                  `${img_300}/${content.poster_path}` : unavailable}
                    alt={content.title || content.name}
                  /> }
                   {<img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className={modalCSS.ContentModalLandscape}
                />}

                <div className={modalCSS.ContentModalAbout}>
                      <div className={modalCSS.ContentModalTitle}>
                        {content.name || content.title} (
                          {
                            (content.first_air_date || content.release_date || "-- -- ----"
                          ).substring(0, 4)})
                      </div>
                          <span>      
                          {content.tagline && (<i className={modalCSS.tagline}>" {content.tagline} "</i>)}
                          </span>

                          <span className={modalCSS.ContentModalDescription}>
                          {content.overview}  
                          </span>
                          
                          <div>
                          <Carousel media_type={props.media_type} id={props.id}/>
                          </div>

                          <Button 
                            className={modalCSS.button}
                            size="large"
                            variant="contained"
                            startIcon={<YouTubeIcon />}
                            color="secondary"
                            target="__blank"
                            href={`https://www.youtube.com/watch?v=${video}`}
                          >
                            Watch The Trailer
                          </Button>
                </div>
              </div>
            </div>
            }
        </Fade>
      </Modal>
    </>
  );
}