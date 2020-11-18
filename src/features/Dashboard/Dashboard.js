import React from 'react';

import {Box, Text} from 'grommet';

import Weather from "../Weather/Weather"
import Stocks from "../Stocks/Stocks";

const Dashboard = ({pos}) => {



    return(
        <Box align="center" justify="center" >
            <Text as="h1">Bonjour Erwan</Text>
            <Box margin="small">
                <Weather pos={pos}/>
            </Box>
            <Box margin="small">
                <Stocks/>
            </Box>
        </Box>
    )
}

export default Dashboard;