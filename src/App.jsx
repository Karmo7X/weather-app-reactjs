import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


function App() {


  const [data,setData]= useState({})
  const [location,setLocation]=useState('')

  const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8d6e692fcfcd4d1e81db451d077b8585&units=metric`

  const searchlocation= (event) =>
  {
      if(event.key==='Enter'){
         axios.get(url).then((response) =>
    {
      setData(response.data)
      console.log(response.data)
    })

      setLocation('')
      }
   
  }

  return (
    <div className="App">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyDown={searchlocation}
        placeholder= 'Enter location'
        type="text" />
      </div>
      <div className='container'>
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
          {data.main? <h1 className='pt-4'>{data.main.temp.toFixed()}℃</h1> :null}
          </div>
          <div className="description">
            {data.weather? <p className='fw-lighter pt-3'>{data.weather[0].main}</p>:null}
          </div>
        </div>



      {data.name !== undefined &&
        <div className="bottom">
          <div className="feels">
           {data.main ? <p className='fw-bold'>{data.main.feels_like.toFixed()}℃</p>:null}
           <p className='fw-lighter'>Feels like</p>
          </div>
          <div className="humidity">
           {data.main ?<p className='fw-bold'>{data.main.humidity.toFixed()}%</p> :null}
            <p className='fw-lighter'>Humidity</p>
          </div>
          <div className="wind">
  
          {data.wind?<p className='fw-bold'>{data.wind.speed.toFixed()}MPH</p> :null}
            <p className='fw-lighter'>Wind Speed</p>
          </div>
        </div>
}
      </div>
      
    </div>
  );
}

export default App;
