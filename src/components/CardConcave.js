import React from "react";

import {Box} from "grommet";
import styled from "styled-components";


const CardConcave = styled(Box)`
    border-radius: 35px;
    background: #292929;
    box-shadow: inset 13px 13px 22px #1b1b1b, 
            inset -13px -13px 22px #373737;
`;

export default CardConcave;