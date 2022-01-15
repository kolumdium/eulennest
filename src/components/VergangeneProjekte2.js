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
                    text = "Wir unterstützen die Kinder auch dabei ihre eigenen Projekte zu planen und umzustezen."/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/fahrradkeller.jpg" 
                    title = "Radspende" 
                    text = "Zu Weihnachten 2020 hat der Ferein dem Eulennest 14 Fahrräder gestiftet."/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/ausflug_rad_1.jpg" 
                    title = "Fahrradausflüge" 
                    text = "Die neuen Räder wurden im nächsten Jahr bei einem gemeinsamen Ausflug bereits für eine Radtour entlang der Elbe genutzt."/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/rad_rep_1.jpg" 
                    title = "Reparaturstunde" 
                    text = "Anschließend an den Ausflug wurden die Räder gemeinsam mit den Kindern gepflegt und repariert."/>
            </Grid>
    </Grid>
    </Container>);
}

export default VergangeneProjekte2;