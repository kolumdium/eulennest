import { Container, Grid } from "@mui/material";
import React from "react";
import ProjektGeplant from "./ProjektGeplant";

const AktuelleProjekte = () => {
    return (<Container sx={{ justifyContent:"center" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/* <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Gartenhaus" 
                text = "Bau eines Gartenhauses und Einrichtung als Kinder- und Bastelwerkstatt"/>
            </Grid> */}
            <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Neue T-shirts" text = "Um das Gemeinschaftsgefühl zu fördern, sollen alle Kinder T-Shirts mit dem Eulennest-Logo erhalten."/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Umbau" text = "Malerarbeiten und einziehen von Zwischenwänden zur Verschönerung der Kinderzimmer."/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Abenteuerspielplatz" text = "Der bereits bestehende Spielplatz aus Euro-Paletten soll durch einen neuen, richtigen Abenteuerspielplatz ersetzt werden."/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Ferien" text = "Die geplanten Ferienfahrten mit den Kindern, wollen wir finanziell unterstützen."/>
            </Grid>
        </Grid>
    </Container>);
}

export default AktuelleProjekte;