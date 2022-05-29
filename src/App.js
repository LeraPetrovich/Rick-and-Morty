import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css'
import Filters from "./components/Filter/Filter";
import Cards from "./components/Card/Card";
import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import styles from './components/Card/Card.module.scss';
function App() {
  let [pageNumber,setPageNumber]=useState(1); //состояние влияет на переключение имен и самих карточек
  let[fetchedData, updateFetchedData]=useState([]);  //состояние карт
  let {info, results} =fetchedData; 
  let [search, setSearch]=useState("")
  let [status, updateStatus] = useState("");
let [gender, updateGender] = useState("");
let [species, updateSpecies] = useState("");
  //console.log(results);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(()=>{   //информация из api
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
<Search setPageNumber={setPageNumber} setSearch={setSearch} />
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
    <Cards results={results}/>
  </div>
</div>
</div>
</div>
<Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
</div>
);
}
export default App;
