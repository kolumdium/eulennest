import { Container, Grid } from "@mui/material";
import React from "react";
import ProjektGeplant from "./ProjektGeplant";

const VergangeProjekteNoPic = () => {
    return (<Container sx={{ justifyContent:"center" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Selbst gemacht schmeckt am besten!" text = "Mit den Kindern werden Beete angelegt und gepflegt. Sie ernten, was sie säen."/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Reiseaustattung" text = "Übergabe von 14 Reisetaschen und Ausstattung mit Elektr.Zahnbürsten"/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Vieles Mehr" text = "Wenn sie noch mehr Informationen haben wollen schreiben sie uns gerne eine Email oder kommen sie vorbei!"/>
            </Grid>
        </Grid>
    </Container>);
}

export default VergangeProjekteNoPic;