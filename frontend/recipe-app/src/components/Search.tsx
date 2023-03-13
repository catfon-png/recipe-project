import React, {useRef, FormEvent, RefObject} from "react";
// import fetchData from 'server'

const Search = () => {
    const searchInput = useRef<HTMLInputElement>(null);
    const searchHandler = (e : FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const search : string = searchInput.current!.value;
        console.log('You searched:', search) 
        // fetchData(search)
    }
  return (
    <section className="search">
      <h1>Search for a recipe</h1>
      <label className="search-recipe">
        <input
          type="text"
          name="search"
          className="search-recipe__input"
          placeholder="search for a recipe"
          ref={searchInput}
        />
      </label>
      <button className="search-recipe__button" onClick={searchHandler}>Search!</button>
    </section>
  );
};

export default Search;
