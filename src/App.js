import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Phrase from "./components/Phrase";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  // phrase of state
  const [phrase, updatePhrase] = useState({});

  const getApi = async () => {
    const api = await fetch(
      "http://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const phrase = await api.json();
    updatePhrase(phrase[0]);
  };

  // Load a phrase
  useEffect(() => {
    getApi();
  }, []);

  return (
    <Container>
      <Phrase phrase={phrase} />
      <Boton onClick={() => getApi()}>Get Phrase!</Boton>;
    </Container>
  );
}

export default App;
