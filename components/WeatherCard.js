import React, {useState} from "react";
import sunny from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg"
import partlycloudy from "../assets/PartlyCloudy.svg"
import rainy from "../assets/Rainy.svg"



function WeatherCard(props) {
  let image;
  if(props.city.forecast === "Sunny"){
    image = sunny
  }
  if(props.city.forecast === "Rainy"){
    image = rainy
  }
  if(props.city.forecast === "Cloudy"){
    image = cloudy
  }
  if(props.city.forecast === "Partly cloudy"){
    image = partlycloudy
  }
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {image} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">City: {props.city.city}</h3>
            <h5 className="card-text">Temperature: {props.city.temperature}</h5>
            <h5 className="card-text">Forecast: {props.city.forecast}</h5>
        </div>
    </div>
  );
};

export default WeatherCard;