import "./styles.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card img={item.title} duration={item.duration} />;
  });

  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
