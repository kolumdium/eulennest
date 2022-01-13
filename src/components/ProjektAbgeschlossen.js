import { AppBar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Dialog, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { Image } from 'mui-image'

ProjektAbgeschlossen.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string,
    pictures: PropTypes.arrayOf(PropTypes.string),
};

function ProjektAbgeschlossen(props){
    const [open, setOpen] = React.useState(false);
    var itemData;
    if (Array.isArray(props.pictures)){
        itemData = [props.image].concat(props.pictures)
    } else {
        itemData = [props.image]
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card sx = {{ marginBottom: 5}}>
            <CardActionArea>
                <CardMedia sx = {{ height:250}} image = {props.image}></CardMedia>
                <CardContent sx = {{ minHeight:150}}>
                    <Typography variant="h5">{props.title}</Typography>
                    <Typography variant="body1">{props.text}</Typography>
                </CardContent>
                <CardActions>
                    <Button size = "small" onClick={handleClickOpen}>
                        Mehr Anzeigen
                    </Button>
                    <Dialog
                        fullScreen
                        open={open}
                        onClose={handleClose}
                        // TransitionComponent={Transition}
                    >
                        <AppBar sx={{ position: 'relative', marginBottom: 5}}>
                        <Toolbar>
                            <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                            >
                            <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Bilder
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose}>
                                Schließen
                            </Button>
                        </Toolbar>
                        </AppBar>

                        <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                            {itemData.map((item) => (
                                <Grid item xs={12} sm={12} md={12}>
                                <Image
                                    fit = "scale-down"
                                    width = "100%"
                                    height = "80%"
                                    showLoading={true}
                                    src={`${item}`}
                                    // srcSet={`${item}`}
                                    // alt={item}
                                    loading="lazy"
                                />
                                </Grid>
                            ))}
                        </Grid>
                    </Dialog>
                </CardActions>
            </CardActionArea>
        </Card>);
}

export default ProjektAbgeschlossen;


// const itemData = [
//     {
//       img: 'images/kind_bohren.jpg',
//       title: 'Breakfast',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//       title: 'Burger',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//       title: 'Camera',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//       title: 'Coffee',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//       title: 'Hats',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//       title: 'Honey',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//       title: 'Basketball',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//       title: 'Fern',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//       title: 'Mushrooms',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//       title: 'Tomato basil',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//       title: 'Sea star',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//       title: 'Bike',
//     },
//   ];