import {useState, createContext} from "react"
const cities = require('../data.js')
const WeatherContext = createContext(null)

function Form({location, setLocation, weather, setWeather}){
    const [typedLocation, setTypedLocation] = useState("")
    const cityNames = []
    cities.forEach((x) => cityNames.push(x.city))
    function handleSubmit(event){
        event.preventDefault()
        if(cityNames.includes(typedLocation)){
            setLocation(typedLocation)
            setTypedLocation("")
        }
        else{
            setLocation("Not found")
            setTypedLocation("")
        }
    }
    async function searchLocation(e){
        e.preventDefault()
        const searchTarget = typedLocation
        const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.API_KEY}&q=${searchTarget}`)
        const data = await response.json()
        const locationKey = data[0]["Key"]
        const locationName = data[0]["EnglishName"]
        const currentConditions = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${process.env.API_KEY}&language=en-us`)
        const conditionsJson = await currentConditions.json()
        const relevantData = {name: locationName, description: conditionsJson[0]["WeatherText"], temperatureCelsius: conditionsJson[0]["Temperature"]["Metric"]["Value"], temperatureFahrenheit: conditionsJson[0]["Temperature"]["Imperial"]["Value"]}
        setWeather(relevantData)
    }
    return (
    <WeatherContext.Provider value={weather}>
    <div className = "form">
    <form onSubmit={searchLocation}>
        <label className = "city" >City:
            <input type="text" value={typedLocation} onChange={(e) => setTypedLocation(e.target.value)}/>
        </label>
        <button 
            className = "btn btn-primary" 
            type="submit"
        >Submit</button>
    </form>
    </div>
    </WeatherContext.Provider>
    )
}



export default Form;