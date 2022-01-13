import { Container, Grid } from "@mui/material";
import React from "react";
import ProjektAbgeschlossen from "./ProjektAbgeschlossen";

const VergangeneProjekte2 = () => {
    return (<Container sx = {{ justifyContent:"center"}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/kind_bohren.jpg" 
                    title = "Weiterbildung und Praxis" 
                    text = "Wir helfen den Kindern auch dabei zu lernen Ihre eigenen Projekte anzugehen und umzusetzen."/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/fahrradkeller.jpg" 
                    title = "Radspende" 
                    text = "Weihnachten 2020 stiftete der Verein dem Kinderheim 14 Fahrräder."/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/ausflug_rad_1.jpg" 
                    title = "Fahrradausflüge" 
                    text = "Ein gemütlicher Ausflug entlang der Elbe mit den neuen Fahrrädern."/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/rad_rep_1.jpg" 
                    title = "Reparaturstunde" 
                    text = "Nach dem Ausflug wurden die Räder gemeinsam repariert."/>
            </Grid>
    </Grid>
    </Container>);
}

export default VergangeneProjekte2;