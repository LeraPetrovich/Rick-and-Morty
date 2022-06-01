//когда в пути ссылки мы меняем в пути /location то открывается страница Location
import Debounce from "./Debounce";
import Filters from "./components/Filter/Filter";
import Cards from "./components/Card/Card";
import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import styles from "./components/Card/Card.module.scss";
const Home = () => {
  let [pageNumber, setPageNumber] = useState(1); //состояние влияет на переключение имен и самих карточек
  let [fetchedData, updateFetchedData] = useState([]); //состояние карт
  let { info, results } = fetchedData;
  let [search, setSearch] = useState("");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  const debonse = Debounce((a) => setSearch(a), 500);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {
    //информация из api

    async function Async() {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    }
    Async();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mp-4">Characters</h1>

      <Search setPageNumber={setPageNumber} setSearch={debonse} />
      <div className="container ">
        <div className="row">
          <Filters
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            setPageNumber={setPageNumber}
          />
          <div className={`${styles.content} col-8`}>
            <div className="row ">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </div>
  );
};
export default Home;
