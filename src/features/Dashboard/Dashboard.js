import React from 'react';

import {Box, Text} from 'grommet';

import Weather from "../Weather/Weather"

const Dashboard = ({pos}) => {



    return(
        <Box align="center" justify="center" >
            <Text as="h1">Bonjour Erwan</Text>
            <Box margin="small">
                <Weather pos={pos}/>
            </Box>
        </Box>
    )
}

export default Dashboard;