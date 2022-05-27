import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filter/Filter";
import Cards from "./components/Card/Card";
import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
function App() {
  let [pageNumber,setPageNumber]=useState(1); //состояние влияет на переключение имен и самих карточек
  let[fetchedData, updateFetchedData]=useState([]);
  let {info, results} =fetchedData;
  let [search, setSearch]=useState("")
  console.log(results);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  useEffect(()=>{
    (async function(){
      let data =await fetch(api).then(res=>res.json());
      updateFetchedData(data);
    })();
  },[api]);
  return (
    <div clssName="App">
<h1 className="text-center ubuntu my-4">
  Rick & Morty <span className="text-primary">WiKi</span>
</h1>
<Search setSearch={setSearch} />
<div className="container">
<div className="row">
<div className="col-3"></div>
<div className="col-3"></div>
<Filters />
</div>
<div className="col-8">
  <div className="row">
    <Cards results={results}/>
  </div>
</div>
</div>
<Pagination setPageNumber={setPageNumber}/>
</div>
);
}
export default App;
