import React from "react";

import { Box, Stack } from "grommet";
import styled from "styled-components";

const ParralaxRay = styled(Box)`
    transform: rotate(${props => props.moveX}) ;  
`;


const Sun = ({pos}) => {

    return (
    
        <Stack anchor="center" style={{opacity: 0.5}} >

            <Box background="status-warning" width="xsmall" height="xsmall" round="full" elevation="small" moveX={() => {
                     const x = parseFloat(pos.match(/^\d*.\d{2}/g,''))*0.25
                     return x+"px"
                }} />
            <ParralaxRay background="status-warning" width="130px" height="10px" round="small"  moveX={() => {
                     const x = parseFloat(pos.match(/^\d*.\d{2}/g,''))
                     return x+"deg"
                }} />
            <ParralaxRay background="status-warning" width="10px" height="130px" round="small"  moveX={() => {
                     const x = parseFloat(pos.match(/^\d*.\d{2}/g,''))
                     return x+"deg"
                }} />
            <ParralaxRay background="status-warning" width="10px" height="130px" round="small"  moveX={() => {
                     const x = parseFloat(pos.match(/^\d*.\d{2}/g,''))
                     return 45+x+"deg"
                }} />
            <ParralaxRay background="status-warning" width="10px" height="130px" round="small"  moveX={() => {
                     const x = parseFloat(pos.match(/^\d*.\d{2}/g,''))
                     return x-45+"deg"
                }} />
            
        </Stack>

    )
}


export default Sun;