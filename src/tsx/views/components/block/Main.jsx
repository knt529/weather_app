import { useEffect, useState } from "react";
import Weather from "./Weather";

import Home from "./Home";
import Header from "./Header";

function Main() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      const url = 'https://api.openweathermap.org/data/2.5';
      const appid = 'b7bf85f3c676fdd272f8c6020b88e946';

      await fetch(`${url}/weather/?lat=${lat}&lon=${long}&lang=ja&units=metric&appid=${appid}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

  return (
    <div className="main">
     {(typeof data.main != 'undefined') ? (
       <div className="main_content">  
       <Header/> 
       <Home/>  
       <Weather weatherData={data}/>
      </div>
      ): (
        <div className="loading">
          <h1>Weather App</h1>
          <p>loading...</p>
        </div>
      )}
    </div>
  );
}

export default Main