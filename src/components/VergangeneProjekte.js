import { Container, Grid } from "@mui/material";
import React from "react";
import ProjektAbgeschlossen from "./ProjektAbgeschlossen";

const VergangeneProjekte = () => {
    return (<Container sx = {{ justifyContent:"center"}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/Leaf1.jpg" 
                    title = "Gemeinsam arbeiten macht am meisten Spaß" 
                    text = "Die Kinder verbringen immer wieder Zeit mit den Mitarbeitern der Firma ETS. Was die Erwachsenen am meisten freut."
                    pictures = {["images/Leaf2.jpg"]}/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/garage.jpg" 
                    title = "Gemeinsame Pause auch" 
                    text = "Die Kinder verbringen immer wieder Zeit mit den Mitarbeitern der Firma ETS. Was die Erwachsenen am meisten freut."/>
            </Grid>
            
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/pavillion_3.jpg" 
                    title = "Pavillion bauen" 
                    text = "Es wurde mit der Hilfe der Kinder im Jahr 2020 ein Pavillion auf Ihrem Grundstück errichtet."
                    pictures = {["images/pavillion_1.jpg", "images/pavillion_2.jpg", "images/pavillion_4.jpg"]}/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/feuer1.jpg" 
                    title = "Ferien für alle" 
                    text = "Wir unterstützen die Kinder auch bei ihren Ferienfahrten."/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/malen.jpg" 
                    title = "Malen mit Hand und Fuß" 
                    text = "Verschönerung der Unterkunft durch Blumen und Bilder"/>
            </Grid>
    </Grid>
    </Container>);
}

export default VergangeneProjekte;