import React from "react";
import stales from "./Search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNumber(1); //функция которая работает после окончания значения элемента формы
          setSearch(e.target.value);
        }}
        placeholder="Search for Characters "
        type="text"
        className={stales.input}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="btn btn-primary"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
