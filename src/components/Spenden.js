import { Container, Stack, Grid } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';
import { Image } from 'mui-image'

const Spenden = () => {
    return (
    <Container>
        <Typography variant = "h6" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center", textAlign:"center" }}>
            Unser Zuhause ist das Eulennest, das uns unbeschwert aufwachsen lässt. Glücklich können wir Kinder spielen, Dank der Hilfe von ganz vielen.
        </Typography>
        <Typography variant = "body1" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center", textAlign:"center" }}>
            Alle Spenden kommen unseren Kindern und Jugendlichen zu Gute. Tragen auch Sie mit dazu bei, ihnen ein Zuhause und eine langfristige Perspektive zu sichern.
            Der Förderverein ist als gemeinnütziger Verein vom Finanzamt bestätigt. Spenden sind daher steuerlich absetzbar. Wir stellen Ihenen dazu gerne einen Spendenbeleg aus.
        </Typography>
        <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={4}>
                    <Stack>
                        <Typography
                        variant="h6" 
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center", textAlign:"center" }}
                        >
                            Vereinsvorsitzender:
                        </Typography>
                        <Typography
                        variant="body1" 
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center", textAlign:"center" }}
                        >
                            Andreas Stacker
                        </Typography>
                    </Stack>
                    
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Stack>
                        <Typography
                        variant="h6" 
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center", textAlign:"center" }}
                        >
                            Amtsgericht Stendal VR 5904:
                        </Typography>
                        <Typography
                        variant="body1" 
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center", textAlign:"center" }}
                        >
                            102/142/14178
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={4} sm={8} md={4}>
                    <Stack>
                        <Typography
                        variant="h6" 
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center", textAlign:"center" }}
                        >
                            Unser Spendenkonto:
                        </Typography>
                        <Typography
                        variant="body1" 
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, justifyContent:"center", textAlign:"center" }}
                        >
                            Volksbank Magdeburg e.G. <br></br>
                            IBAN: DE66 8109 3274 0001 1651 51 <br></br>
                            BIC: GENODEF1MD1
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={4} sm={8} md={12}>
                    <Image 
                        fit = "scale-down"
                        width = "100%"
                        height = "100%" src = {"images/kinder_nah.jpg"}></Image>
                </Grid>
            </Grid>
        </Container>
    </Container>);
}

export default Spenden;