import React from "react"


import Card from "../../components/Card";
import GradientText from "../../components/GradientText";
import CardConcave from "../../components/CardConcave";
import ConcaveButton from "../../components/ConcaveButton";

import {Box, Text, Layer, Image, Button, ResponsiveContext, Collapsible} from "grommet"

import { Scrollbars } from 'react-custom-scrollbars';

import nextLaunches from "../../data.json"
import { Close, Next, Previous } from "grommet-icons";

const LastLaunch = () => {

    const [launches, setLaunches] = React.useState(nextLaunches);
    const [showInfo, setShowInfo] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const [show, setShow] = React.useState(true)

    React.useEffect(() => {
        fetch("https://ll.thespacedevs.com/2.0.0/launch/upcoming/?rocket__configuration__manufacturer__name__icontains=spacex")
        .then(res => res.json())
        .then(data => {data.results && setLaunches(data);
        })
    }, [])


    const size = React.useContext(ResponsiveContext);

    return (
<>
 <Card round="small" pad="medium" gap="medium" fill="vertical" width="large">

 <GradientText weight="bold" size="medium">Next launches</GradientText>
     
         <Box fill="vertical">
         <Scrollbars autoHeight autoHide autoHeightMax="100%">
             {launches && launches.results.map((item, i) => (

                 <CardConcave key={i} round="small" pad="small" onClick={()=>{setIndex(i); setShowInfo(true)}} margin={{vertical:"small"}}>
                     <Text size={size}>{ item.name}</Text>
                     <Text size={size}>{ new Date(item.net).toLocaleString("fr-FR")}</Text>

                 </CardConcave>
             )
             )}
             </Scrollbars>
         </Box>
     
 </Card>
 {showInfo && (
     <Layer
     
     onEsc={() => setShowInfo(false)}
     onClickOutside={() => setShowInfo(false)}
     position="center"
     modal={false}>
         <Card width={size!== "small" ? "large" : "medium"} height={size!== "small" ? "large" : "medium"} pad="small">
             <Button onClick={()=>setShowInfo(false)} icon={<Close />} />
             {launches.results[index].infographic ? (
                 <Image src={launches.results[index].infographic} fit="contain"/>
             ) : (
                 <Text>No infographic available</Text>
             )}
             
         </Card>
     </Layer>
 )}

        </>
    )
}

export default LastLaunch;