import { Container, Grid } from "@mui/material";
import React from "react";
import ProjektGeplant from "./ProjektGeplant";

const VergangeProjekteNoPic = () => {
    return (<Container sx={{ justifyContent:"center" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Selbst gemacht schmeckt am besten!" text = "Gemeinsam mit den Kindern werden Beete angelegt und gepflegt. Das selbst herangezogene Gemüse und Obst, schmeckt den Kindern am besten."/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Reiseaustattung" text = "Für Ferienfahrten und Co. hat der Ferein 14 Reisetaschen und elektrische Zahnbürsten gestiftet."/>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <ProjektGeplant title = "Vieles Mehr" text = "Wir arbeiten ständig an neuen Projekten für und mit den Kindern. Wenn Sie weitere Informationen haben möchten, schreiben Sie uns gerne eine E-Mail oder kommen Sie vorbei."/>
            </Grid>
        </Grid>
    </Container>);
}

export default VergangeProjekteNoPic;