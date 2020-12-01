import React from 'react';

import {Box, Text,ResponsiveContext} from 'grommet';

import Weather from "../Weather/Weather"
import Stocks from "../Stocks/Stocks";
import Calendar from "../Calendar/Calendar"

const Dashboard = ({pos}) => {

    const size = React.useContext(ResponsiveContext);


    return(
        <Box  align="center"fill>
            <Text as="h1">Bonjour Erwan</Text>
            <Box direction={size ==="large" ? "row" : "column"} gap="small" align="center">
                <Box >
                    <Weather pos={pos}/>
                </Box>
                <Box >
                    <Stocks/>
                </Box>
                <Box>
                    <Calendar/>
                </Box>
            </Box>   
        </Box>
    )
}

export default Dashboard;