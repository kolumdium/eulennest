import { Box, Container, IconButton, Stack, styled, Typography } from "@mui/material";
import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-scroll'
import { ArrowUpward } from "@mui/icons-material";


const CustomBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));
  
Headline.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.string,
};

function Headline(props){
    return (<CustomBox id = {props.id} sx = {{ color: '#fff', marginTop: 2, paddingTop: 1, marginBottom: 2}}>
        <Stack direction="row">
            <Typography
                variant={props.size}
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center" , textAlign:"center", color:'#fff'}}
            >
                {props.title}
            </Typography>
            <Link to="Navbar" spy={true} smooth={true}>
                <IconButton style={{ color: "white" }} aria-label="up">
                    <ArrowUpward /> 
                </IconButton>
            </Link>
        </Stack>
    </CustomBox>);
}

export default Headline;