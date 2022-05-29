import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css'
import Filters from "./components/Filter/Filter";
import Cards from "./components/Card/Card";
import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import styles from './components/Card/Card.module.scss';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
function App(){
  return(
    <Router>
<div className="App">
<Navbar/>
</div>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/episodes" element={<Episodes/>}/> 
  <Route path="/location" element={<Location/>}/>
</Routes>
    </Router>
  )
}
//когда в пути ссылки мы меняем в пути /location то открывается страница Location
const Home=()=> {
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
