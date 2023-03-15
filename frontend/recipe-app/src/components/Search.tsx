import {
  useRef,
  FormEvent,
  useContext,
} from "react";
import { AppContext } from "../AppContext";
import "../styles/Search.css";

const Search = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const { setQuery, setSearch } = useContext(AppContext);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const search: string = searchInput.current!.value;
    setSearch(search);
    setQuery(search);
  };

  return (
    <section className="search">
      <h1>Need ideas to cook?</h1>
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
        <button className="search-recipe__button" type="submit">
          Search!
        </button>
      </form>
    </section>
  );
};

export default Search;
