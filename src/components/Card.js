import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={`../images/${props.item.coverImg}`}
        alt="run"
        className="card--image"
      />
      <div>
        <span>{props.item.title}</span>
      </div>
      <div className="card--stats">
        <span className="gray">{props.item.year} • </span>
        <span className="gray">{props.item.duration}</span>
        <span>{props.item.movie}</span>
      </div>
    </div>
  );
}
