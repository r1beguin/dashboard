import React from "react";

import { Box, Text, ResponsiveContext, Button } from "grommet";
import { Refresh } from "grommet-icons"

import ApiCalendar from 'react-google-calendar-api';


const Calendar = () => {

    const [next, setNext] = React.useState();
    const [start, setStart] =React.useState();
    const [end, setEnd] = React.useState();

    React.useEffect(() => {
        if (ApiCalendar.sign)
        ApiCalendar.listUpcomingEvents(10)
          .then(({result}: any) => {
            console.log(result.items);
            setNext(result.items[0]);
            setStart(new Date(result.items[0].start.dateTime))
            setEnd(new Date(result.items[0].end.dateTime))
          });
    }, [ApiCalendar.sign])

    return (
        <Box  background="dark-1" elevation="xsmall" round="small" pad="small"  margin="small" justify="center" align="center" height="small" width="medium">
            <Text>Calendar</Text>
            {!ApiCalendar.sign && (
                <Box align="center" justify="center" gap="small" margin="small">
                    <Button label="Connexion" onClick={() => ApiCalendar.handleAuthClick()} color="brand"/>
                </Box>
            )}

            {next && (
                <Box background="brand" fill="horizontal" pad="small" margin="small" round="small" direction="row" align="center" justify="around" elevation="xxsmall">
                        <Text>{start && start.toLocaleString().match(/^\d+\/\d+\/\d+/g,'')}</Text>
                        <Box>
                            <Text>{start && start.toLocaleString().match(/\d+:\d+/g,'')}</Text>
                            <Text>{end && end.toLocaleString().match(/\d+:\d+/g,'')}</Text>
                        </Box>
                        <Box align="center" justify="center">
                            <Text>{next.summary}</Text>
                            
                        </Box>
                </Box>
            )}
             
        </Box>
    )
}


export default Calendar;