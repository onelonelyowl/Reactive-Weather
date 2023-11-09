import {useState} from "react"
const cities = require('../data.js')

function Form({location, setLocation}){
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
    return (
    <div className = "form">
    <form onSubmit={handleSubmit}>
        <label className = "city" >City:
            <input type="text" value={typedLocation} onChange={(e) => setTypedLocation(e.target.value)}/>
        </label>
        <button 
            className = "btn btn-primary" 
            type="submit"
        >Submit</button>
    </form>
    </div>
    )
}



export default Form;