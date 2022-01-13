import { Container, Grid } from "@mui/material";
import React from "react";
import ProjektGeplant from "./ProjektGeplant";

const AktuelleProjekte = () => {
    return (<Container sx={{ justifyContent:"center" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Gartenhaus" text = "Bau eines Gartenhäuschens als Kinderwerkstatt damit die Kinder lernen z.b. Ihre Fahrräder selber zu reparieren"/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Neue T-shirts" text = "Ausstattung der Kinder mit gleich Shirts usw. mit Eulennestlogo. Gemeinschaftsgefühl"/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Umbau" text = "Kindgerechte Verschönerung der Kinderzimmer- Großbildern"/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Abenteuerspielplatz" text = "Ablösung des Euro-Pallettenspielplatzes durch einen neuen &quot;Abenteuerspielplatz&quot;"/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Ferien" text = "Unterstützung Ferienfahrt"/>
            </Grid>
        </Grid>
    </Container>);
}

export default AktuelleProjekte;