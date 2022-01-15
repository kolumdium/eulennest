
import React from "react";
import { Image } from 'mui-image'
import { Box, Button, Container, Stack } from "@mui/material";
import { Money, Search } from "@mui/icons-material";
import {Link} from 'react-scroll'

const Top = () => {
    return (
        <div>
            <Box sx = {{height:"50vh", marginTop: 3, overflow:"false"}}>
                <Image 
                    src={"images/LogoTmp.png"} 
                    showLoading={true}
                    fit = "scale-down"
                    // width = "100%"
                    height = "100%"
                    // sx = {{maxHeight:"1000"}}
                    // sx = {{
                    //     height:{sx:"100%", lg:"80%"},
                    //     width:{sx:"100%", lg:"80%"}}}
                    // aspectRatio={(16/9)}
                    // imageStyle={width: 'inherit', height: 'inherit'}
                    />
            </Box>

            <Box>
                <Stack direction = "row" spacing = {2} sx = {{marginTop:2, marginBottom:2, justifyContent:"center"}}>
                    <Link  to="Allgemeine Informationen" spy={true} smooth={true}>
                        <Button variant="outlined" startIcon={<Search />}>
                        Informationen
                        </Button>
                    </Link>
                    <Link  to="Spendeninformationen" spy={true} smooth={true}>
                        <Button variant="outlined" startIcon={<Money />}>
                            Spenden
                        </Button>
                    </Link>
                </Stack>
            </Box>
        </div>
        // 
        
    );
}

export default Top;