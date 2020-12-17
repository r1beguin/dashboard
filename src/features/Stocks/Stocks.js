import React from "react";

import { Box, Text, ResponsiveContext, Button } from "grommet";
import { Refresh } from "grommet-icons"
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";

import secret from "../../secret.json";

import Card from "../../components/Card"
import MiniButton from "../../components/MiniButton"

const Stocks = () => {

    const [data, setData] = React.useState();
    const [time, setTime] = React.useState('interval=1d&range=1y');
    const [current, setCurrent] =React.useState();
    const [situation, setSituation] = React.useState(7);
    const [refresh, setRefresh] = React.useState(true);

    const size = React.useContext(ResponsiveContext);

    React.useEffect(() => {

        if (refresh) {

            fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?${time}&symbol=TSLA&region=US`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": secret,
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
                }
            })
            .then(response => response.json())
            .then(data => { 
                const arr = [];
                data.chart.result[0].indicators.quote[0].close.map((item,i) => {
                    let unix_timestamp = data.chart.result[0].timestamp[i]
                    var date = new Date(unix_timestamp * 1000);
                    var formattedTime = date.toLocaleString('en-GB', { timeZone: 'UTC' });
                    arr.push({x: formattedTime, close: item})

            })
                setData(arr)
            })

            
            fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?symbols=TSLA&region=US", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "396c8c801cmsh03d8aa703d5356cp10f6bfjsneeb135511ccb",
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
                }
            })
            .then(response => 
                response.json()
                
            )
            .then(data => {setCurrent(data.quoteResponse.result[0].ask)})
            
            setRefresh(false);
        }

    }, [refresh,time])

    return (
        <Card round="small" height={size === "large" ? "medium" :"small"} round="small" pad="small" justify="center" align="center" >
                
                <Card  round="small" align="center" pad="medium">
                    <Text size="small" color="brand">{current} $</Text>
                    <Text size="small" color="brand">{(situation*current).toString().match(/^\d+/g,'')} $</Text>                     
                </Card> 

            <Box width="350px" height="60%">
                <ResponsiveContainer >
                    <LineChart data={data}
                    margin={{top: 5, right: 30, left: 20}}>
                        <XAxis dataKey="x" hide interval="preserveStartEnd" tick={false} />
                        <YAxis tick={false} hide />
                        
                        <Tooltip contentStyle={{color: "#994650"}}/>
                        
                        <Line dataKey="close" type="monotone"  stroke="#cc0000" dot={false}/>
                    </LineChart>
                </ResponsiveContainer>
            </Box>
         
             
        </Card>
    )
}


export default Stocks;