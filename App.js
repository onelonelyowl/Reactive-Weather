import React, {useState} from 'react';
import WeatherCard from './components/WeatherCard';
import Form from './components/Form.js'
const cities = require('./data.js')
import Location from './components/Location.js'
const dotenv = require('dotenv')

// console.log(cities)
function App() {
    const [location, setLocation] = useState("London")
    const [currentCity, setCurrentCity] = useState(cities.find((city) => city.city === location))
    const [showError, setShowError] = useState({display: "none"})
    const [weather, setWeather] = useState({})
    if(currentCity === undefined){
        setCurrentCity({
            city: 'Not found',
            temperature: 404,
            forecast: 'Unknown'
          })
    }
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            {/* <div className = "app">
                {cities.map(city => <WeatherCard city={city} />)}
            </div> */}
            <div className = "app">
                <Form location={location} setLocation={setLocation} weather={weather} setWeather={setWeather}/>
                <label className = "error" style={showError}> You have entered an incorrect city! </label>
                <Location location={location} setLocation={setLocation} weather={weather} setWeather={setWeather} />
            </div>
            
        </>
    )
}

export default App;