import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/").then((res) => {
      const resp = res.data.results;
      const results = resp.filter(char => 
        char.name.toLowerCase().includes(input)
      )
      setCharacters(results);
    }).catch((err) => {
      console.log(err)
    })
  }, [input]);

  return (
    <section className="character-list">
      <SearchForm {...props} characters={characters} input={input} setInput={setInput}/>
      {characters.map((character, index) => {
        return <CharacterCard name={character.name} key={index}/>
      })}
    </section>
  );
}
