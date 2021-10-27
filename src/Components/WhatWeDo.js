import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    // border: 3px solid red;
    margin-left: 13rem;
    margin-right: 13rem;
    padding: 6rem;
    padding-top: .5rem;
    padding-right: 3.5rem;
    display: grid;
    grid-template-columns:repeat(2,1fr);
    justify-items: center;
    align-items: center;
    grid-gap: 5px

`
const Box = styled.div`
    border: 2px solid blue;
    width: 40rem;
    height: 20rem;
     
`

function WhatWeDo() {
    return(

        <Container>
            <Box>Floor installation</Box>
            <Box>Bathroom Remodel</Box>
            <Box>Paint</Box>
            <Box>Coffering</Box>
            <Box>Demolition</Box>
            <Box>Building Maintence</Box>
            <Box>Remodeling</Box>
            <Box>Framing</Box>
        </Container>
    )
}

export default WhatWeDo;