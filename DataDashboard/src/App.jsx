import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import TemperatureChart from './TemperatureChart';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [searchDate, setSearchDate] = useState('');
  const [temperatureFilter, setTemperatureFilter] = useState('');
  const [windSpeedFilter, setWindSpeedFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.weather.gov/gridpoints/OKX/33,36/forecast');
        const data = await response.json();
        console.log('Fetched weather data:', data);

        if (data && data.properties && data.properties.periods) {
          setWeatherData(data.properties.periods);
          setFilteredData(data.properties.periods);
        } else {
          console.error('Invalid weather data structure:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchDate, temperatureFilter, windSpeedFilter, weatherData]);

  const applyFilters = () => {
    let filtered = weatherData;

    if (searchDate) {
      filtered = filtered.filter((period) => period.startTime.includes(searchDate));
    }

    if (temperatureFilter) {
      filtered = filtered.filter((period) => {
        const temperature = period.temperature ? period.temperature.toString() : '';
        return temperature.includes(temperatureFilter);
      });
    }

    if (windSpeedFilter) {
      filtered = filtered.filter((period) => period.windSpeed.includes(windSpeedFilter));
    }

    setFilteredData(filtered);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchDate(value);
  };

  const handleTemperatureFilter = (e) => {
    const { value } = e.target;
    setTemperatureFilter(value);
  };

  const handleWindSpeedFilter = (e) => {
    const { value } = e.target;
    setWindSpeedFilter(value);
  };

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1>AstroDash</h1>
  //       <h2>New York City Weather Forecast</h2>
  //       <input
  //         type="date"
  //         value={searchDate}
  //         onChange={handleSearch}
  //       />
  //       <input
  //         type="text"
  //         placeholder="Filter by Temperature"
  //         value={temperatureFilter}
  //         onChange={handleTemperatureFilter}
  //       />
  //       <input
  //         type="text"
  //         placeholder="Filter by Wind Speed"
  //         value={windSpeedFilter}
  //         onChange={handleWindSpeedFilter}
  //       />
  //     </header>
  //     <main>
  //       <div className="WeatherList">
  //       <TemperatureChart data={filteredData} />
  //         <table>
  //           <thead>
  //             <tr>
  //               <th>Date</th>
  //               <th>Time</th>
  //               <th>Temperature (°F)</th>
  //                <th>Wind Speed</th>
  //               <th>Short Forecast</th>
  //               <th>Details</th> {/* New column for details button */}
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {filteredData.map((period, index) => (
  //               <tr key={index}>
  //                 <td>{period.startTime.split('T')[0]}</td>
  //                 <td>{period.startTime.split('T')[1]}</td>
  //                 <td>{period.temperature} °F</td>
  //                 <td>{period.windSpeed}</td>
  //                 <td>{period.shortForecast}</td>
  //                 <td><Link to={`/weatherDetails/${period.startTime.split('T')[0]}`}>Details</Link></td> {/* Button for details */}
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //         {filteredData.length === 0 && <p>No weather data available</p>}
  //       </div>
  //     </main>
  //   </div>
  // );
  return (
    <div className="App">
      <header className="App-header">
        <h1>AstroDash</h1>
        <h2>New York City Weather Forecast</h2>
        <input
          type="date"
          value={searchDate}
          onChange={handleSearch}
        />
        <input
          type="text"
          placeholder="Filter by Temperature"
          value={temperatureFilter}
          onChange={handleTemperatureFilter}
        />
        <input
          type="text"
          placeholder="Filter by Wind Speed"
          value={windSpeedFilter}
          onChange={handleWindSpeedFilter}
        />
      </header>
      <main>
        <div className="container">
          <div className="WeatherList">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Temperature (°F)</th>
                  <th>Wind Speed</th>
                  <th>Short Forecast</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((period, index) => (
                  <tr key={index}>
                    <td>{period.startTime.split('T')[0]}</td>
                    <td>{period.startTime.split('T')[1]}</td>
                    <td>{period.temperature} °F</td>
                    <td>{period.windSpeed}</td>
                    <td>{period.shortForecast}</td>
                    <td><Link to={`/weatherDetails/${period.startTime.split('T')[0]}`}>Details</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredData.length === 0 && <p>No weather data available</p>}
          </div>
          <div className="chart-container">
            <TemperatureChart data={filteredData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;


