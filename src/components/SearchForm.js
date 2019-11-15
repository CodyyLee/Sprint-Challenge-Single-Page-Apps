import React, { useState } from "react";

export default function SearchForm(props) {
  const [myChar, setMyChar] = useState([]);

  const changeHandler = (e) => {
    props.setInput(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
  }
 
  return (
    <section className="search-form">
     <form onSubmit={submitHandler}>
      <input type="text" id="name" name="name" placeholder="Enter Character Name..." onChange={changeHandler} value={props.input}/>
     </form>
    </section>
  );
}
