import "./App.css";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-12">
          <form id="search-form">
            <input type="text" placeholder="search" id="searched-city" />
            <button type="submit" id="search-button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              type="button"
              className="btn btn-outline-warning"
              id="here-now"
            >
              current location
            </button>
          </form>
        </div>
        <div className="col-12 actual-city" id="here">
          Krakow, PL
        </div>
        <div className="actual-date">Last updated: Mon 21:53</div>
      </div>
      <div className="actual-icon">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt=""
          className="img-icon"
        />
      </div>
      <div className="weather-description">Clear</div>
      <div className="row today">
        <div className="col-6 actual-temperature">
          <div className="row degree">
            <div className="col-2" />
            <div className="col-6 t">
              <span id="temp">3</span>
            </div>
            <div className="col-4 c">
              <a href="#" id="celsius">
                | <strong>°C </strong>
              </a>
              <br />

              <a href="#" id="fahrenheit">
                °F
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 other-infos">
          <ul>
            <li>
              Humidity
              <div>
                <span className="humidity">70</span>%
              </div>
            </li>
            <li>
              Wind
              <div>
                <span className="wind"></span>
                <span className="wind-unit"> 6 Km/h</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
