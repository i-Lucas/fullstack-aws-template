import React from "react";
import styled from "styled-components";

export default function NotFound() {

    return (
        <Container>
            <h1>Essa página não existe</h1>
            <a href="/">Home</a>
        </Container>
    )
};

const Container = styled.section`

    width: 100%;
    height: 100vh;
`;