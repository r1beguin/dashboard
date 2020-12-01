import React from "react";

import { Box, Text, ResponsiveContext, Button } from "grommet";
import { Refresh } from "grommet-icons"

import ApiCalendar from 'react-google-calendar-api';


const Calendar = () => {

    const [next, setNext] = React.useState();
    const size = React.useContext(ResponsiveContext);


    React.useEffect(() => {
        if (ApiCalendar.sign)
        ApiCalendar.listUpcomingEvents(5)
          .then(({result}: any) => {
            console.log(result.items);
            setNext(result.items);
            
          });
    }, [ApiCalendar.sign])

    return (
        <Box  background="card" round="small" pad="small"  margin="small" justify="center" align="center" width="medium" height="small
        ">
            <Text>Calendar</Text>
            {!ApiCalendar.sign && (
                <Box align="center" justify="center" gap="small" margin="small">
                    <Button label="Connexion" onClick={() => ApiCalendar.handleAuthClick()} color="brand"/>
                </Box>
            )}
            <Box height="small" gap="xxsmall">

            {next && 
                next.map(item => {
                    const start = new Date(item.start.dateTime);
                    const end = new Date(item.end.dateTime)
                    return (
                        <Box background="accent"  pad="small" width="medium" round="small" direction="row" align="center" justify="around" elevation="xxsmall">
                            <Text size="xsmall">{start && start.toLocaleString().match(/^\d+\/\d+\/\d+/g,'')}</Text>
                            <Box>
                                <Text size="xsmall">{start && start.toLocaleString().match(/\d+:\d+/g,'')}</Text>
                                <Text size="xsmall">{end && end.toLocaleString().match(/\d+:\d+/g,'')}</Text>
                            </Box>
                            <Box align="center" justify="center" overflow="auto" width="xsmall">
                                <Text size="xsmall" >{item.summary}</Text>
                                
                            </Box>
                        </Box>
                    )
                })
               
            }
            </Box>
             
        </Box>
    )
}


export default Calendar;