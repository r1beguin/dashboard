import React from "react";
import { Grommet, Box, ResponsiveContext  } from "grommet";

import DashBoard from "./features/Dashboard/Dashboard";
import Google from "./features/Google/Google";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const theme = {
  global: {
    colors: {
      brand: '#cc0000',
      back: "#292929",
      card: "#bfdbf7",
      accent: "#994650",
      ok: '#00C781',
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  const [pos, setPos] = React.useState("0px");

  const size = React.useContext(ResponsiveContext);
  return (
    <Grommet theme={theme} full>
      <Box fill={size!=="small" ? true : false} align="center" justify="center" background="back" onMouseMove={e => {
            let x = 0;
            
            if (size==="small"){
                x = (e.screenX-768/2)/768*25+"px";
            }else {
                x = (e.screenX-1536/2)/1536*25+"px";
            }

            setPos(x)
            
            }}>
      <Router>
        <Switch>
          <Route path="/">
            <DashBoard pos={pos}/>
          </Route>
          <Route path="/googleb361f288960081a4.html">
            <Google/>
          </Route>
        </Switch>
    </Router>
      </Box>
    </Grommet>
  );
}

export default App;
