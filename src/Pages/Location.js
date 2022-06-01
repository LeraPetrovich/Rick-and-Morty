import React, { useState, useEffect } from "react";
//import eact , {useState,useEffect} from 'react'
import Cards from "../components/Card/Card";
//import InputGroup from "../components/Filter/Category/InputGroup";
import InputLocation from "../components/Filter/Category/InputLocation";
const Location = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { name, type, dimension } = info;
  let [count, setCount] = useState([]);
  let [locations, setLocation] = useState([]);
  let api = `https://rickandmortyapi.com/api/location/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

 let api2 = `https://rickandmortyapi.com/api/location/`;
  useEffect(() => {
    if (!count) return;
    async function Read2() {
      const location = [...Array(count + 1).keys()];
      const url = api2 + "/" + location.join(",");
      console.log(url);
      let data3 = await fetch(url).then((res) => res.json());
      console.log(data3)
      setLocation(data3);
    }
    Read2();
  }, [count]);

  useEffect(() => {
    async function Read() {
      let data2 = await fetch(api2).then((res) => res.json());
      console.log(data2);
      setCount(data2.info.count);
    }
    Read();
  }, []);



  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mp-4">
          Location:{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          <h5 className="text-center">
            Dimension: {dimension === "" ? "Uncnown" : dimension}
          </h5>
          <h5 className="text-center">
            Type: {type === "" ? "Uncnown" : type}
          </h5>
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputLocation name="Location" setID={setID} locations={locations} />
        </div>

        <div className="col-8">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
