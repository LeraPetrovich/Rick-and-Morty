import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Cards = ({ results, page }) => {
  let display;
  if (results) {
    //если ввели имя которое есть в списке api
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-4 mb-4 position-relative text-dark"
        >
          <div className={styles.cards}>
            <img src={image} className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="ubuntu fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}{" "}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}{" "}
                </div>
              );
            } else if (status === "unknown") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    //иначе выводит фразу, что его нет
    display = "No Characters Found :/";
  }
  return <>{display}</>;
};

export default Cards;
