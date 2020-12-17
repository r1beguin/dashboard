import React from "react";

import { Box, Stack, ResponsiveContext } from "grommet";
import styled from "styled-components";

const ParralaxBigCloud = styled(Box)`
    transform: translateX(${props => props.moveX}) ;  
`;
const ParralaxLittleCloud = styled(Box)`
    transform: translateX(${props => props.moveX}); 
`;



const Cloud = ({pos}) => {
    const size = React.useContext(ResponsiveContext);
    return (
        <Stack anchor="bottom" style={{opacity: 0.5}} >

            <ParralaxBigCloud background="#edf4f5" width={size === "large" ? "160px" : "80px"} height={size==="large" ? "50px" : "25px"} round="medium" elevation="small" moveX={() => {
                     const x = parseFloat(pos.match(/^\d*.\d{2}/g,''))*0.25
                     return x+"px"
                }} />
            <Stack anchor="right" >
                <Box pad={{right: "10px"}}>
                    <ParralaxBigCloud background="#daeff2" width={size === "large" ? "100px" : "50px"} height={size === "large" ? "100px" : "50px"} round="full" moveX={pos}  />
                </Box>
                <ParralaxLittleCloud background="#a9d1d6" width={size === "large" ? "70px" : "35px"} height={size === "large" ? "70px" : "35px"} round="full" moveX={() => {
                     const x = parseFloat(pos.match(/^\d*.\d{2}/g,''))*0.5
                     return x+"px"
                }}/>
            </Stack>
            
        </Stack>
        
    )
}


export default Cloud;