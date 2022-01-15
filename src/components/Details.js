// import { makeStyles } from "@material-ui/core";
import { Container } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';

// const useStyles = makeStyles((theme) => ({

// }));

const Details = () => {
    // const classes = useStyles();
    return (<Container>
        <Typography
            variant="body1" 
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center" , textAlign:"center"}}
          >
            Der Förderverein &quot;Eulennest&quot; unterstützt alle Projekte des Kinderheims Eulennest in Jerchel.
        </Typography>
        <Typography
            variant="body1" 
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center" , textAlign:"center"}}
          >
            Gemeinsam mit der Patenbrigade von der Firma ETS-GmbH  
werden die Projekte gemeinsam mit den Kindern umgesetzt.
        </Typography>
        <Typography
            variant="body1" 
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center" , textAlign:"center"}}
          >
            Der Verein ist bereits seit 2015 aktiv. Soziale Zuwendungen sind dabei genauso wichtig wie materielle, weshalb die Aktivitäten oft nicht nur für, sondern mit den Kindern gemacht werden.
        </Typography>
    </Container>);
}

export default Details;