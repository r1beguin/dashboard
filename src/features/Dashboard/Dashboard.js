import React from 'react';

import {Box, Text} from 'grommet';

import Weather from "../Weather/Weather"

const Dashboard = () => {


    return(
        <Box align="center" justify="center">
            <Text as="h1">Bonjour Erwan</Text>
            <Box margin="small">
                <Weather />
            </Box>
        </Box>
    )
}

export default Dashboard;