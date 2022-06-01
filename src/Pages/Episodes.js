import React, { useState, useEffect } from "react";
import Cards from "../components/Card/Card";
import InputGroup from "../components/Filter/Category/InputGroup";
const Episodes = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let [count, setCount] = useState([]);
  let [episodes, setEpisode] = useState([]);
  console.log(episodes);
  let { air_date, name } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id > 0 ? id : ""}`;
  useEffect(() => {
    async function Read() {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    }
    Read();
  }, [api]);

  let api2 = `https://rickandmortyapi.com/api/episode/`;
  useEffect(() => {
    if (!count) return;
    async function Read2() {
      const episode = [...Array(count + 1).keys()];
      const url = api2 + "/" + episode.join(",");
      console.log(url);
      let data3 = await fetch(url).then((res) => res.json());
      setEpisode(data3);
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
          Episode:{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup
            name={name}
            setID={setID}
            selected={id}
            episodel={episodes}
          />
        </div>

        <div className="col-8">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
