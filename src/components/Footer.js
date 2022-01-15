import { Call, House, Mail, Person } from "@mui/icons-material";
import { Stack, Grid, Container, Button, styled, Box, Alert, IconButton, Collapse } from "@mui/material";
import React from "react";
import { Image } from 'mui-image'
import Close from "@mui/icons-material/Close";

const CustomBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  }));

const FakeButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color:'white',
    textTransform: 'none',
  }));

const Footer = () => {
    const [open, setOpen] = React.useState(false);

    return (
    <CustomBox sx = {{ marginTop: 10, paddingBottom: 5}}>
        <Container>
            <Collapse in={open}>
                <Alert
                action={
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpen(false);
                    }}
                    >
                    <Close fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
                >
                Text in Zwischenablage kopiert.
                </Alert>
            </Collapse>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4}>
                        <Image 
                            src={"images/logofooter.png"} 
                            // aspectRatio={(16/9)}
                            
                            // imageStyle={width: 'inherit', height: 'inherit'}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Stack>
                            <FakeButton 
                                sx = {{textDecoration: "underline"}} 
                                onClick={() =>  {
                                    navigator.clipboard.writeText("Ansprechpartner Förderverein\n"
                                        +"Andreas Stacker\n"
                                        +"0391 631040430\n"
                                        +"A.Stacker@ets-magdeburg.de\n"
                                        +"Johann-Gottlieb-Schoch-Str. 3\n"
                                        +"39108 Magdeburg"); 
                                    setOpen(true);
                                    setTimeout(() => {
                                        setOpen(false);
                                    }, 3000);
                                }}>
                                Ansprechpartner Förderverein
                            </FakeButton>
                            <FakeButton 
                                startIcon={<Person />} 
                                onClick={() =>  {
                                    navigator.clipboard.writeText("Andreas Stacker"); 
                                    setOpen(true);
                                    setTimeout(() => {
                                        setOpen(false);
                                    }, 3000);
                                }}>
                                Name: Andreas Stacker
                            </FakeButton>
                            <FakeButton 
                                startIcon={<Call />}
                                onClick={() =>  {
                                    navigator.clipboard.writeText("0391631040430"); 
                                    setOpen(true);
                                    setTimeout(() => {
                                        setOpen(false);
                                    }, 3000);
                                }}>
                                Telefon: 0391/ 63 10 40 430
                            </FakeButton>
                            <FakeButton 
                                startIcon={<Mail />}
                                onClick={() =>  {
                                        navigator.clipboard.writeText("A.Stacker@ets-magdeburg.de"); 
                                        setOpen(true);
                                        setTimeout(() => {
                                            setOpen(false);
                                        }, 3000);
                                    }}>
                                Email: A.Stacker@ets-magdeburg.de
                            </FakeButton>
                            <FakeButton 
                                startIcon={<House />}
                                onClick={() =>  {
                                    navigator.clipboard.writeText("Johann-Gottlieb-Schoch-Str. 3"); 
                                    setOpen(true);
                                    setTimeout(() => {
                                        setOpen(false);
                                    }, 3000);
                                }}>
                                Adresse: Johann-Gottlieb-Schoch-Str. 3 
                            </FakeButton>
                            <FakeButton 
                                onClick={() =>  {
                                    navigator.clipboard.writeText("39108 Magdeburg"); 
                                    setOpen(true);
                                    setTimeout(() => {
                                        setOpen(false);
                                    }, 3000);
                                }}>
                                39128 Magdeburg
                            </FakeButton>
                        </Stack>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Stack>
                            <FakeButton 
                                sx = {{textDecoration: "underline"}} 
                                onClick={() =>  {
                                    navigator.clipboard.writeText("Martin Plank\nmartin.plank@protonmail.com"); 
                                    setOpen(true);
                                    setTimeout(() => {
                                        setOpen(false);
                                    }, 3000);
                                }}>
                                Ansprechpartner Website
                            </FakeButton>
                            <FakeButton 
                                startIcon={<Person />}
                                onClick={() =>  {
                                    navigator.clipboard.writeText("Martin Plank"); 
                                    setOpen(true);
                                    setTimeout(() => {
                                        setOpen(false);
                                    }, 3000);
                                }}>
                                Name: Martin Plank
                            </FakeButton>
                            <FakeButton 
                                startIcon={<Mail />}
                                onClick={() =>  {
                                    navigator.clipboard.writeText("martin.plank@protonmail.com"); 
                                    setOpen(true);
                                    setTimeout(() => {
                                        setOpen(false);
                                    }, 3000);
                                }}>
                                Email: martin.plank@protonmail.com
                            </FakeButton>
                        </Stack>
                    </Grid>
                </Grid>
        </Container>
    </CustomBox>);
}

export default Footer;