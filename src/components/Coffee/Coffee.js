import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Coffee.css";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";

const handleMessage = () => {
  alert("For this demo the Delete feature has been deactivated.");
};

const Coffee = (props) => {
  const [animation, setAnimation] = useState(false);

  const onEnterViewport = () => {
    setAnimation(true);
  };
  const {
    _id,
    name,
    brand,
    espresso_gs,
    output,
    time,
    tds,
    percent,
    country,
    image,
  } = props.coffee;

  return (
    <div className={`card ${animation ? "slideFromRight" : ""}`}>
      <ScrollTrigger onEnter={onEnterViewport}></ScrollTrigger>
      <div className="column">
        <h1 className="brand-txt">{brand}</h1>
        <h2 className="name-txt">{name}</h2>
        <img src={image} alt={name} width={500} />
      </div>

      <div className="column">
        <ul>
          <li>Notes: {country}</li>
          <li>Input: {espresso_gs}g</li>
          <li>Output: {output}g</li>
          <li>Time: {time}s</li>
          <li>TDS: {tds}</li>
          <li>Percent: {percent}%</li>
        </ul>
      </div>

      <Button component={Link} to={`/coffees/${_id}`}>
        Update
      </Button>
      <Button
        className="delete-button"
        /*onClick={props.deleteHandler}*/ onClick={handleMessage}
        onTouchEnd={handleMessage}
      >
        Delete
      </Button>
    </div>
  );
};

export default Coffee;
