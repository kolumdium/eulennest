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
                    text = "Die Projekte gehen wir gemeinsam an. Die Kinder lernen spielend den Umgang mit Material und Werkzeug."/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/fahrradkeller.jpg" 
                    title = "Radspende" 
                    text = "Weihnachten 2020 bekamen die Kinder von der Patenbrigade ETS 14 Fahrräder geschenkt."/>
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
                    text = "Gemeinsam mit den Kindern haben wir eine AG Fahrrad gegründet. Regelmäßig werden die Fahrräder kontrolliert und repariert."/>
            </Grid>
    </Grid>
    </Container>);
}

export default VergangeneProjekte2;