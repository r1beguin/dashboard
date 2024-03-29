import React from "react";

import { Box, Text, Stack, ResponsiveContext } from "grommet";

import Cloud from "./Cloud";
import Rain from "./Rain";
import Sun from "./Sun";

import secret from "../../secret.json";

import Card from "../../components/Card"


const Weather = ({ pos }) => {

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
                .then(data => { setData(data); setWeather(data.currently.icon) })
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

            setDate(j + " " + da + " " + mo + " " + ye);
            setTime(h + " : " + m)
        }, 1000)



    }, [refresh])

    const size = React.useContext(ResponsiveContext);

    return (
        <Card round="small" pad="small" width="medium" justify="center" align="center">
            <Box pad={{ top: size === "large" ? "xlarge" : size === "small" ? "large" : "medium", horizontal: "small" }} round="small">

                <Stack anchor="center" margin={{ bottom: "medium" }}>


                    {data && weather === "rain" ? (
                        <Rain pos={pos} />
                    ) : data && weather === "cloudy" || weather === "partly-cloudy-day" ? (
                        <Cloud pos={pos} />
                    ) : data && weather === "clear-day" ? (
                        <Sun pos={pos} />
                    ) : (
                        <Sun pos={pos} />
                    )}

                    <Text size="small">{data && data.currently.temperature.toString().match(/^\d*/g, '')} C°</Text>
                </Stack>

            </Box>

            <Box pad="small" align="center" margin="small">
                <Box align="center" gap="small" margin="small">
                    <Text weight="bold" size={size}>{date}</Text>
                    <Text size={size}>{time}</Text>
                </Box>


            </Box>
        </Card>
    )
}


export default Weather;