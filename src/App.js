import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import {Link, Route} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";


export default function App() {
  return (
    <main>
      <Link to="/">
        <p>Home</p>
      </Link>

      <Link to="/Characters">
        <p>Characters</p>
      </Link>
      <Header />
      <Route exact path="/" render={() => {
       return <WelcomePage />
      }}/>
      <Route exact path="/Characters" render={() => {
        return <CharacterList/>
      }}/>
    </main>
  );
}
