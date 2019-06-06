import React from "react";
import Weather from "./weather";
import Info from "./info";
import Form from "./form";
import { DataTable } from "mdbreact";
import "./style_weather.css";

const API_KEY = "ed48cff49465da806da2e6c8d255f919";

class WeatherInfo extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  };

  gettingWeather = async e => {
    e.preventDefault();
    var city = e.target.elements.city.value;

    if (city) {
      const city = e.target.elements.city.value;
      const api_url = await fetch(
        `https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await api_url.json();

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      let sunset_data =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: DataTable.sys.country,
        sunrise: data.sys.sunrise,
        sunset: sunset_data,
        error: "undefined"
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "enter city name"
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather} />

                <Weather
                  temp={this.state.temp}
                  citi={this.state.city}
                  country={this.state.country}
                  sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherInfo;
