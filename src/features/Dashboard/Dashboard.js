import React from 'react';

import {Box, Text,ResponsiveContext} from 'grommet';

import Weather from "../Weather/Weather"
import Stocks from "../Stocks/Stocks";
import Calendar from "../Calendar/Calendar"

const Dashboard = ({pos}) => {

    const size = React.useContext(ResponsiveContext);


    return(
        <Box pad="medium" align="center" fill margin="small">
            
            <Box direction={size ==="large" ? "row" : "column"} gap="large" align="center">
                <Box direction={(size==="large" || size==="medium") ? "row" : "column"} gap="large" align="center">
                    <Box >
                        <Weather pos={pos}/>
                    </Box>
                    <Box >
                        <Stocks/>
                    </Box>
                </Box>    
                <Box>
                    <Calendar/>
                </Box>
            </Box>   
        </Box>
    )
}

export default Dashboard;