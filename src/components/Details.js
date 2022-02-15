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
            Als Förderverein des Kinderheims  &quot;Eulennest&quot; verfolgen wir das Ziel, möglichst viele Projekte des Kinderheims zu unterstützen.
        </Typography>
        <Typography
            variant="body1" 
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center" , textAlign:"center"}}
          >
            Im Jahr 2015 ist die Firma ETS Energie auf das Heim aufmerksam geworden. Sofort war klar, da müssen wir helfen.
        </Typography>
        <Typography
            variant="body1" 
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center" , textAlign:"center"}}
          >
            So ist die Fa. ETS ab 2015 eng mit den Kindern als „Patenbrigade ETS“ verbunden.
        </Typography>
        <Typography
            variant="body1" 
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center" , textAlign:"center"}}
          >
            Gemeinsam mit der Patenbrigade der Fa. ETS werden Projekte zusammen mit den Kindern umgesetzt. Das macht allen Spaß. Doch oftmals fehlen die finanziellen Mittel, um da Kinderheim zum zu Hause der Kinder zu machen.
        </Typography>
        <Typography
            variant="body1" 
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center" , textAlign:"center"}}
          >
            Wir gründeten im Jahr 2021 den Förderverein und hoffen, damit unsere Ziele zu erreichen. Bitte unterstützen Sie und helfen Sie uns bei unseren Vorhaben.
        </Typography>
    </Container>);
}

export default Details;