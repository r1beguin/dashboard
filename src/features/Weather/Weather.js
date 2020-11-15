import React from "react";

import { Box, Text, Image } from "grommet";

import secret from "../../secret.json";

import cloudy from "../../asset/icons/cloud.png";
import cloudyNight from "../../asset/icons/cloudyNight.png";
import partlyCloudy from "../../asset/icons/cloudy.png";
import fog from "../../asset/icons/fog.png";
import night from "../../asset/icons/night.png";
import rain from "../../asset/icons/rain.png";
import snow from "../../asset/icons/snowy.png";
import clear from "../../asset/icons/sun.png";
import wind from "../../asset/icons/wind.png";

const Weather = () => {

    const [data, setData] = React.useState();
    const summaries = "clear-day clear-night partly-cloudy-day partly-cloudy-night cloudy rain sleet snow wind fog";
    const [date, setDate] = React.useState();
    const [time, setTime] = React.useState();

    React.useEffect(() => {

        fetch("https://dark-sky.p.rapidapi.com/43.603951,1.444510?lang=en&units=auto", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": secret,
                "x-rapidapi-host": "dark-sky.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(data => {setData(data); console.log(data)});

        
            setInterval(() => {
                const d = new Date();
                const ye = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(d);
                const mo = new Intl.DateTimeFormat('fr', { month: 'long' }).format(d);
                const da = new Intl.DateTimeFormat('fr', { day: 'numeric' }).format(d);
                const j = new Intl.DateTimeFormat('fr', { weekday: 'long' }).format(d);
                const h = new Intl.DateTimeFormat('fr', { hour: '2-digit' }).format(d);
                const m = new Intl.DateTimeFormat('fr', { minute: '2-digit' }).format(d);
                const s = new Intl.DateTimeFormat('fr', { second: '2-digit' }).format(d);
                setDate(j+" "+da+" "+mo+" "+ye);
                setTime(h+" "+m+" min "+s+ " sec")
            }, 1000)
           

    }, [])

    return (
        <Box  border={{ color: "brand" }} round="small" height="small" width="medium" pad="small" margin="small" justify="center">
             <Box align="center" direction="row" justify="center" gap="small">
                 <Box align="center">
                    {data && data.currently.summary === "clear-day" ? (
                        <Box height="xsmall" width="xsmall" overflow="hidden">
                            <Image fit="contain" src={clear} />
                        </Box>
                    ) : data && data.currently.summary === "Mostly Cloudy" ? (
                        <Box height="xsmall" width="xsmall" overflow="hidden">
                            <Image fit="contain" src={partlyCloudy} />
                        </Box>
                    ) :
                    data && data.currently.summary === "Overcast" ? (
                        <Box height="xsmall" width="xsmall" overflow="hidden">
                            <Image fit="contain" src={cloudy} />
                        </Box>
                    ) :
                    data &&  (
                            <Text>{data.currently.summary} </Text>
                    )}

                    <Text>{data && data.currently.temperature} C°</Text>
                </Box>
                <Box align="center">
                    <Text weight="bold">{date}</Text>
                    <Text >{time}</Text>
                </Box>
            </Box>
        </Box>
    )
}


export default Weather;