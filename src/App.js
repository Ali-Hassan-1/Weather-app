import React from "react";
import { useState } from "react";
import "./App.css";

const apiKey = "47239c0c857d2e446e8190fe42e3b121";

function App() {
  const [cityName, setCityName] = useState("");
  let [temperature, setTemperature] = useState("");
  let [city, setCity] = useState("");
  let [country, setCountry] = useState("");
  let [description, setDescription] = useState("");

  const getWeather = async (e) => {
    e.preventDefault();
    setCityName("");

    if (cityName) {
      const apiEndCall = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
      );
      const data = await apiEndCall.json();

      if (data.cod === 200) {
        setTemperature(data.main.temp);
        setCity(data.name);
        setCountry(data.sys.country);
        setDescription(data.weather[0].description);
      } else {
        alert("City not found");
      }
    } else {
      alert("Please enter city name first !! ");
    }
  };

  const handleChange = (e) => {
    setCityName(e.currentTarget.value);
  };

  return (
    <div className="weatherApp">
      <div className="mainBody">
        <input type="text" value={cityName} onChange={handleChange} />
        <button onClick={getWeather}>Search</button>
        <h3>Temperature : {temperature ? temperature : ""}</h3>
        <h3>Country : {country} </h3>
        <h3>City : {city ? city : ""} </h3>
        <h3>Description : {description ? description : ""} </h3>
      </div>
    </div>
  );
}

export default App;
