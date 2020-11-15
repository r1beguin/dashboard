import React from "react";

import { Box, Stack } from "grommet";
import styled from "styled-components";


const ParralaxBigCloud = styled(Box)`
    transform: translateX(${props => props.moveX}) ;  
`;
const ParralaxLittleCloud = styled(Box)`
    transform: translateX(${props => props.moveX}); 
`;

const Rain = ({pos}) => {

    return (
        <Box align="center" justify="center">
        <Stack anchor="bottom" style={{opacity: 0.5}} >

            <ParralaxBigCloud background="#edf4f5" width="160px" height="50px" round="medium" elevation="small" moveX={() => {
                     const x = parseFloat(pos.match(/^\d*.\d{2}/g,''))*0.25
                     return x+"px"
                }} />
            <Stack anchor="right" >
                <Box pad={{right: "10px"}}>
                    <ParralaxBigCloud background="#daeff2" width="100px" height="100px" round="full" moveX={pos}  />
                </Box>
                <ParralaxLittleCloud background="#a9d1d6" width="70px" height="70px" round="full" moveX={() => {
                     const x = parseFloat(pos.match(/^\d*.\d{2}/g,''))*0.5
                     return x+"px"
                }}/>
            </Stack>
          
        </Stack>
          
        </Box>
    )
}


export default Rain;