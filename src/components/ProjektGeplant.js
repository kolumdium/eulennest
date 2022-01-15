import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";
import PropTypes from 'prop-types';

ProjekteGeplant.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
};

function ProjekteGeplant(props){
    return (<Card sx = {{ marginBottom: 5}}>
        <CardActionArea>
            {/* <CardMedia className={classes.media} image = {props.path}></CardMedia> */}
            <CardContent sx = {{ minHeight:150}}>
                <Typography variant="h5">{props.title}</Typography>
                <Typography variant="body1">{props.text}</Typography>
            </CardContent>
        </CardActionArea>
    </Card>);
}

export default ProjekteGeplant;