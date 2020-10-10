import React from "react";
import styled from "@emotion/styled";

const ContainerPhrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;

  @media (min-width: 773px) {
    margin-top: 10rem;
  }

  h1 {
    font-display: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    &::before {
      content: open-quote;
      font-size: 6rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -3rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Phrase = ({ phrase }) => {
  if (Object.keys(phrase).length === 0) return null;
  const { quote, author } = phrase;
  return (
    <ContainerPhrase>
      <h1>{quote}</h1>
      <p>by {author}</p>
    </ContainerPhrase>
  );
};

export default Phrase;
