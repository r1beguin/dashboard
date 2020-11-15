import React from "react";
import { Grommet, Box,  } from "grommet";

import DashBoard from "./features/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const theme = {
  global: {
    colors: {
      brand: '#cc0000',
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
  return (
    <Grommet theme={theme} full>
      <Box fill align="center" justify="center" background="dark-2">
      <Router>
        <Switch>
          <Route path="/">
            <DashBoard />
          </Route>
        </Switch>
    </Router>
      </Box>
    </Grommet>
  );
}

export default App;
