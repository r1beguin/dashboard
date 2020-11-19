import React from 'react';

import {Box, Text} from 'grommet';

import Weather from "../Weather/Weather"
import Stocks from "../Stocks/Stocks";
import Calendar from "../Calendar/Calendar"

const Dashboard = ({pos}) => {



    return(
        <Box  align="center"fill>
            <Text as="h1">Bonjour Erwan</Text>
            <Box direction="row" gap="small">
                <Box margin="small">
                    <Weather pos={pos}/>
                </Box>
                <Box margin="small">
                    <Stocks/>
                </Box>
                <Box margin="small">
                    <Calendar/>
                </Box>
            </Box>   
        </Box>
    )
}

export default Dashboard;