import React from "react";

import { Box, Text, ResponsiveContext, Button } from "grommet";

import ApiCalendar from 'react-google-calendar-api';

import Card from "../../components/Card"
import CardConcave from "../../components/CardConcave"
import GradientText from "../../components/GradientText"

const Calendar = () => {

    const [next, setNext] = React.useState();
    const size = React.useContext(ResponsiveContext);


    React.useEffect(() => {
        if (ApiCalendar.sign)
        ApiCalendar.listUpcomingEvents(3)
          .then(({result}: any) => {
            console.log(result.items);
            setNext(result.items);
            
          });
    }, [ApiCalendar.sign])

    return (
        <Card round="small" pad="small" justify="center" align="center" width="medium">
            <Box fill="horizontal" align="start" margin="small" pad={{left: "medium"}}>
                <GradientText weight="bold" size="medium">Next events</GradientText>
            </Box>
            
            {!ApiCalendar.sign && (
                <Box align="center" justify="center" gap="small" margin="small">
                    <Button label="Connexion" onClick={() => ApiCalendar.handleAuthClick()} color="brand"/>
                </Box>
            )}
            <Box height="small" gap="small">

            {next && 
                next.map(item => {
                    const start = new Date(item.start.dateTime);
                    const end = new Date(item.end.dateTime)
                    return (
                        <CardConcave gap="small" pad="medium"round="small" direction="row" align="center" justify="center" elevation="xxsmall">
                            
                            {start && (
                                <Box gap="medium" direction="row" align="center">
                                <Text size="xsmall">{start && start.toLocaleString().match(/^\d+\/\d+\/\d+/g,'')}</Text>
                                <Box>
                                    <Text size="xsmall">{start && start.toLocaleString().match(/\d+:\d+/g,'')}</Text>
                                    <Text size="xsmall">{end && end.toLocaleString().match(/\d+:\d+/g,'')}</Text>
                                </Box>
                                </Box>

                            ) }
                            
                            
                            <Box align="center" justify="center" overflow="auto" width="xsmall">
                                <Text size="xsmall" >{item.summary}</Text>
                                
                            </Box>
                        </CardConcave>
                    )
                })
               
            }
            </Box>
             
        </Card>
    )
}


export default Calendar;