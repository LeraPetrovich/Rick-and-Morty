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
          <InputLocation name="Location" setID={setID} total={126} />
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
