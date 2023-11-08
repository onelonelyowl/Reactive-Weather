import React, {useState} from 'react';
import WeatherCard from './components/WeatherCard';
const cities = require('./data.js')
import Location from './components/Location.js'

// console.log(cities)
function App() {
    const [location, setLocation] = useState("London")
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            {/* <div className = "app">
                {cities.map(city => <WeatherCard city={city} />)}
            </div> */}
            <div className = "app">
                <Location location={location} setLocation={setLocation} />
            </div>
            
        </>
    )
}

export default App;