import React from 'react';

import { Box, ResponsiveContext, Text } from 'grommet';

import Weather from "../Weather/Weather";
import Calendar from "../Calendar/Calendar";
import LastLaunch from "../Lastlaunch/LastLaunch";

const Dashboard = ({ pos }) => {

    const size = React.useContext(ResponsiveContext);


    return (
        <Box pad="medium" align="center" fill margin="small">

            <Box direction={size === "large" ? "row" : "column"} gap="large" align="center">
                <Box direction={(size === "large" || size === "medium") ? "row" : "column"} gap="large" align="center">
                    <Box >
                        <Weather pos={pos} />
                    </Box>

                </Box>
                <Box>
                    <Calendar />
                </Box>

                <Box>
                    <Text>NFL calendar</Text>
                </Box>

                <Box>
                    <Text>Photo</Text>
                </Box>



            </Box>
            <Box>
                <Text>I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.</Text>
            </Box>

        </Box>
    )
}

export default Dashboard;