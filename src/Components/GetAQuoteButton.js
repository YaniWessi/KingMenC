import React from "react";
import styled from "styled-components";


const PicBox = styled.div`
    border: 3px solid black;
    margin-left: 0rem;
    margin-right: 0rem;
    margin-bottom: 3px;
    padding: 24rem;
`

const Button = styled.button`
    // border: 3px solid black;
    border-radius: 5px;
    padding: 1rem;
    width: 15rem;
    background-color: dodgerblue;
    color: white;
`

function GetAQuoteButton() {
    return (
        <PicBox>
            <Button>Get a Quote</Button>
        </PicBox>
    )
}

export default GetAQuoteButton;