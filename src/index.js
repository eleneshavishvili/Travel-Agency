import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import AppHeader from "./components/app-header";
import ToursList from "./components/tourslist/tours-list";
import Tour from "./components/tour";
import TourList from "./components/tour-list";
import WeatherInfo from "./components/weather/weatherinfo";
// import TestimonialsPage from "./components/team-page";
import FooterPage from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <AppHeader />
      <WeatherInfo />
      <ToursList />
      <TourList />
      <Tour />
      <TourList />
      <FooterPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
