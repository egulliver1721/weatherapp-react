import "./App.css";
import Form from "./Form.js";
import WeatherOverview from "./WeatherOverview.js";
import CurrentTemperature from "./CurrentTemperature.js";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="WeatherContainer">
          <Form />
          <h2 className="cityName" id="cityName">
            London
          </h2>
          <WeatherOverview />
          <CurrentTemperature />
        </div>
      </div>
    </div>
  );
}
