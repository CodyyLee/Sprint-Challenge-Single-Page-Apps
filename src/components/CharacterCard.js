import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 90%;
  background-color: #f0f0f0;
  text-align: center;
  padding: 10px;
  margin: 10px auto;
`
const CardImg = styled.img`
  width: 80%;
  margin-left: 0 auto;
`

export default function CharacterCard(props) {
  return (
    <Card>
      <h2>{props.name}</h2>
    </Card>
  );
}