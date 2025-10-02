import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
 
  const [city,setcity] = useState("");

  const [weather,setweather]=useState("");
  const [temp,setTemp]=useState(0)
  const [Description,setDescription]=useState("")

  const handlechange = ()=>{
    console.log(city);
  }

  const weatherfetch = ()=>{
    var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=148b357cf6cf426d43a374597e2ec59c`)

    weatherdata.then((res)=>{

      setweather(res.data.weather[0].main);
      setDescription(res.data.weather[0].description);
      setTemp((res.data.main.temp - 273.15).toFixed(2));

      console.log(res);  
    })
    .catch(()=>{
      console.log("did not fetch api");
      
    })
    setcity("")
  }
  

  return (
   <div className='bg-black w-screen h-screen flex justify-center items-center'>

    <div className='bg-green-300 text-black p-6 w-3/4 rounded-sm'>
      <h1 className='text-2xl font-semibold mb-1'>Weather Report</h1>
    <p className='mb-2'>I can give you a weather report about your city !</p>

    <input className='pb-1 mb-3 border p-1 rounded' 
    type="text" 
    placeholder='Enter your City ' 
    onChange={(event)=>{
      const value =event.target.value
      setcity(value)
    }}
   
    /><br />

    <button 
    className='bg-black text-white p-2 rounded mb-3'
    onClick={weatherfetch}
    >Get Report</button><br />

    <p className='font-bold'>Weather: {weather}</p>
    <p className='font-bold'>Temperature: {temp}</p>
    <p className='font-bold'>Description: {Description} </p>
    
    </div>

    </div>
  )
}

export default App
