import { Container, Grid } from "@mui/material";
import React from "react";
import ProjektAbgeschlossen from "./ProjektAbgeschlossen";

const VergangeneProjekte = () => {
    return (<Container sx = {{ justifyContent:"center"}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/gartenhaus05.jpg" 
                    title = "Gartenhaus" 
                    text = "Bau eines Gartenhauses und Einrichtung als Kinder- und Bastelwerkstatt."
                    pictures = {["images/gartenhaus01.jpg","images/gartenhaus02.jpg","images/gartenhaus03.jpg","images/gartenhaus04.jpg"]}/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/Leaf1.jpg" 
                    title = "Subbotnik" 
                    text = "Gemeinsam arbeiten macht Spaß - nicht nur den Kindern. Auch die Erwachsenen haben Spaß, Zeit mit den Kindern zu verbringen."
                    pictures = {["images/Leaf2.jpg"]}/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/garage.jpg" 
                    title = "Pause" 
                    text = "Wer fleißig ist, darf auch Pause machen. Das genießen sowohl die Erwachsenen als auch die Kinder"/>
            </Grid>
            
            <Grid item xs={4} sm={4} md={4}>
                <ProjektAbgeschlossen 
                    image = "images/pavillion_3.jpg" 
                    title = "Pavillion bauen" 
                    text = "Im Jahr 2020 haben uns die Kinder tatkräftig dabei unterstützt einen Pavillion auf ihrem Grundstück zu errichten."
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
                    text = "Das Eulennest wurde mit Hilfe von Blumen und selbstgemachten Bildern verschönert."/>
            </Grid>
    </Grid>
    </Container>);
}

export default VergangeneProjekte;