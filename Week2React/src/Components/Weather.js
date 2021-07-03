import axios from "axios";
import React, { useEffect, useState } from "react";
import { posts } from "../db.json";
import "./Weather.css";
const Weather = (props) => {
  console.log(props.city);
  const [weather, setWeather] = useState({
    isLoading: true,
    weatherData: [
      {
        description: "",
      },
    ],
    main: {},
    wind: {},
    city: props.city,
  });
  const calCelcius = (temp) => {
    let cell = Math.floor(temp - 273.15);
    return cell;
  };
  const dataValue = {};
  const date = new Date();
  // console.log("======>"+props.getCity)

  useEffect(() => {
    //  axios.get("http://localhost:3600/weather")
    //  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=80f99460ff828d80fe8545b01d7050ae`)
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=9a2fa612b663c37b7d0beaf45baacb7b`
      )
      .then((res) => {
        console.log(res);
        setWeather({
          weatherData: res.data.weather,
          main: res.data.main,
          wind: res.data.wind,
          city: res.data.name,
        });
      })
      .catch((err) => {
        console.error("Error" + err);
      });
  },[props.city]);
  // if(dataValue=="")
  // {
  //    console.log("Your data is empty");

  // }else{
  // setWeather({
  //         weatherData:dataValue.weather,
  //         main:dataValue.main,
  //         wind:dataValue.wind,
  //         city:dataValue.name,
  //         isLoading: false
  //     })
  // }

  return (
    <>
      <div>
        <h2></h2>
        {weather.city}
        {/* {weather.main.temp} */}
        {/* {posts.map(d=><p>{d.id}</p>)} */}
      </div>
      <div className="main container-fluid">
        <h2>For Display Weather Data</h2>
        <div className="row">
          <div className="col-xs-12">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4 weather-panel">
              <div className="col-xs-6">
                <h2>
                  {weather.city}
                  <br />
                  <small>{date.toDateString()}</small>
                </h2>
                <p className="h3">
                  <i className="mi mi-fw mi-lg mi-rain-heavy"></i>
                  {weather.weatherData[0].description}
                </p>
              </div>
              <div className="col-xs-6 text-center">
                <div className="h1 temperature">
                  <span>{calCelcius(weather.main.temp)}°</span>
                  <br />
                  {/* <small>8° / 13°</small>  */}
                </div>
              </div>
              <div className="col-xs-12">
                {/* <ul className="list-inline row forecast">
                            <li className="col-xs-4 col-sm-2 text-center">
                            <h3 className="h5">Wed</h3>
                            <p><i className="mi mi-fw mi-2x mi-cloud-sun"></i><br/>9°/18°</p>
                            </li>
                            <li className="col-xs-4 col-sm-2 text-center">
                            <h3 className="h5">Thu</h3>
                            <p><i className="mi mi-fw mi-2x mi-sun"></i><br/>12°/23°</p>
                            </li>
                            <li className="col-xs-4 col-sm-2 text-center">
                            <h3 className="h5">Fri</h3>
                            <p><i className="mi mi-fw mi-2x mi-cloud-sun"></i><br/>14°/24°</p>
                            </li>
                            <li className="col-xs-4 col-sm-2 text-center">
                            <h3 className="h5">Sat</h3>
                            <p><i className="mi mi-fw mi-2x mi-rain"></i><br/>15°/23°</p>
                            </li>
                            <li className="col-xs-4 col-sm-2 text-center">
                            <h3 className="h5">Sun</h3>
                            <p><i className="mi mi-fw mi-2x mi-rain-heavy"></i><br/>15°/22°</p>
                            </li>
                            <li className="col-xs-4 col-sm-2 text-center">
                            <h3 className="h5">Mon</h3>
                            <p><i className="mi mi-fw mi-2x mi-clouds"></i><br/>12°/17°</p>
                            </li>
                        </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Weather;
