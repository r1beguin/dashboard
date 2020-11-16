import React from "react";

import { Box, Text, Stack, Button, Image } from "grommet";
import { Refresh } from "grommet-icons"

import Cloud from "./Cloud";
import Rain from "./Rain";
import Sun from "./Sun";

import secret from "../../secret.json";


import sun from "../../asset/icons/sun.png";
import cloud from "../../asset/icons/cloud.png";
import rain from "../../asset/icons/rain.png";

const Weather = ({pos}) => {

    const [data, setData] = React.useState();
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [refresh, setRefresh] = React.useState(true);
    const [weather, setWeather] = React.useState("sun");

    React.useEffect(() => {

        
        if (refresh) {
            fetch("https://dark-sky.p.rapidapi.com/43.603951,1.444510?lang=en&units=auto", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": secret,
                    "x-rapidapi-host": "dark-sky.p.rapidapi.com"
                }
            })
                .then(response => response.json())
                .then(data => {setData(data);setWeather(data.currently.icon)})
                setRefresh(false)  
                
        }
            setInterval(() => {
                const d = new Date();
                const ye = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(d);
                const mo = new Intl.DateTimeFormat('fr', { month: 'long' }).format(d);
                const da = new Intl.DateTimeFormat('fr', { day: 'numeric' }).format(d);
                const j = new Intl.DateTimeFormat('fr', { weekday: 'long' }).format(d);
                const h = d.getHours();
                const m = d.getMinutes();
                
                setDate(j+" "+da+" "+mo+" "+ye);
                setTime(h+" : "+m)
            }, 1000)
        
       

    }, [])

    return (
        <Box  background="dark-1" elevation="xsmall" round="small" pad={{bottom:"small"}} width="medium" margin="small" justify="center" align="center">
            <Box fill="horizontal" align="end">
                <Button icon={<Refresh />} onClick={() => setRefresh(true)} />
            </Box>
            
                <Stack anchor="center" margin={{top:"large", bottom:"small"}}>


                    {data && weather === "rain" ? (
                        <Rain pos={pos} />
                    ):data && weather === "cloudy" ?(
                        <Cloud pos={pos} />
                    ) : (
                        <Sun pos={pos}/>
                    )}
                    
                    <Text>{data && data.currently.temperature.toString().match(/^\d*/g,'')} C°</Text>
                </Stack>
                
            
            <Box align="center">
                <Text weight="bold">{date}</Text>
                <Text >{time}</Text>
                <Text >{data && data.currently.icon}</Text>
            </Box>
           
           <Box align="center" direction="row">
                <Button icon={<Box width="xxsmall" height="xxsmall" ><Image fit="contain" src={sun} /></Box>} onClick={() => setWeather("sun")}/>
                <Button icon={<Box width="xxsmall" height="xxsmall" ><Image fit="contain" src={cloud} /></Box>} onClick={() => setWeather("cloudy")}/>
                <Button icon={<Box width="xxsmall" height="xxsmall" ><Image fit="contain" src={rain} /></Box>} onClick={() => setWeather("rain")}/>
            </Box>
                
        </Box>
    )
}


export default Weather;