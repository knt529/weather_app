import moment from 'moment';
import "../../../styles/block/Weather.css"

function utcToJSTime(utcTime) {
  return utcTime * 1000;
}

function Weather({weatherData}) {
  
  const icon = weatherData.weather[0].icon + "@2x.png";
  const iconPath = "https://openweathermap.org/img/wn/" + icon

  console.log(iconPath)

  const dateTime = new Date(utcToJSTime(weatherData.dt))
  const month = dateTime.getMonth() + 1;
  const date = dateTime.getDate();
  const hours = dateTime.getHours();
  const min = String(dateTime.getMinutes()).padStart(2, '0');
  const desc = weatherData.weather[0].description;
  const temp = Math.round(weatherData.main.temp);
  const press = weatherData.main.pressure;
  const wind = Math.round(weatherData.wind.speed);
  const feel = Math.round(weatherData.main.feels_like);

  return(
    <div className="weather">
      {/* <form className="form1" action="自分のサイトURL" method="get">
      <input className="sbox1" name="s" type="text" placeholder="例）tokyo, America" />
      <input className="sbtn1" type="submit" value="検索" />
      </form> */}

      <div className='now'>
        <p className="city">現在地：{weatherData.name}</p>
        <p className="date">{month}/{date} {hours}:{min}</p>
      </div>

      <div className="weather_content">
        <div className='icon_temp'>
          <div className='icon'><img src={iconPath}></img></div>
          <p className="temp">{temp}<span className='deg'>&deg;C</span></p>
        </div>
        
        <div className='desc_feel'>
          <p className="desc">{desc}</p>
          <p className='feel'>体感温度： {feel}&deg;C</p>
        </div>
      </div>

      <div className="detail">
        <p className="hum">湿度： {weatherData.main.humidity} %</p>
        <p>風速： {wind}m/秒</p>
        <p>気圧： {press}hPa</p>
      </div>

  </div>
  )
}

export default Weather;