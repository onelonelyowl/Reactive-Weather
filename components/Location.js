const cities = require('../data.js')
import React, {useState} from 'react';
import sunny from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg"
import partlycloudy from "../assets/PartlyCloudy.svg"
import rainy from "../assets/Rainy.svg"

function Location({location, setLocation, weather, setWeather}){
  const [temperatureUnit, setTemperatureUnit] = useState("Celsius")
    // const currentCity = cities.find((city) => city.city === location)
    // let image;
    // if(currentCity.forecast === "Sunny"){
    //   image = sunny
    // }
    // if(currentCity.forecast === "Rainy"){
    //   image = rainy
    // }
    // if(currentCity.forecast === "Cloudy"){
    //   image = cloudy
    // }
    // if(currentCity.forecast === "Partly cloudy"){
    //   image = partlycloudy
    // }
    const image = cloudy
    function changeUnits(e){
      e.preventDefault()
      if(temperatureUnit === "Celsius"){
        setTemperatureUnit("Fahrenheit")
      }
      else{
        setTemperatureUnit("Celsius")
      }
    }
    return (
    <div className = "card">
        <div className = "img-container">
            <h3>Your Location's Weather</h3>
            <img className="card-img-top" src = {image} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">City: {weather.name}</h3>
            <h5 className="card-text">Temperature: {temperatureUnit === "Celsius" ? weather.temperatureCelsius : weather.temperatureFahrenheit} {temperatureUnit}</h5>
            <h5 className="card-text">Forecast: {weather.description}</h5>
            <button onClick={changeUnits}>{temperatureUnit === "Celsius" ? "Display Fahrenheit" : "Display Celsius"}</button>
        </div>
    </div>
    )
}

export default Location;