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
                                <Grid item xs={12} sm={12} md={12} key={item}>
                                    <Image
                                        fit = "scale-down"
                                        width = "100%"
                                        height = "80%"
                                        showLoading={true}
                                        src={`${item}`}
                                        // key={1}
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