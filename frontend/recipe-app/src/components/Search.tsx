import React, {useRef, FormEvent, RefObject, useState, useContext} from "react";
import { AppContext } from "../AppContext";
import '../styles/Search.css'
// import fetchData from './'

const Search = () => {
    const searchInput = useRef<HTMLInputElement>(null);
    const {setQuery, setSearch, recipes} = useContext(AppContext);
    const submitHandler = (e : FormEvent) => {
        e.preventDefault();
        const search : string = searchInput.current!.value;
        console.log('You searched:', search) 
        setSearch(search)
        setQuery(search)
        // console.log('this is a recipe:',recipes)
        // fetch
        // return search;
        // fetchData(search)
        // console.log(se
        // searchInput.reset()
    }

  return (
    <section className="search">
      <h1>Search for a recipe</h1>
      <form onSubmit={submitHandler}>

      <label className="search-recipe">
        <input
          type="text"
          name="search"
          className="search-recipe__input"
          placeholder="search for a recipe"
          ref={searchInput}
          />
      </label>
      <button className="search-recipe__button" type='submit'>Search!</button>
          </form>
    </section>
  );
};

export default Search;
