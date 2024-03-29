// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [weatherData, setWeatherData] = useState([]);
//   const [searchDate, setSearchDate] = useState('');
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.weather.gov/gridpoints/OKX/33,36/forecast');
//         const data = await response.json();
//         console.log('Fetched weather data:', data);

//         // Ensure we have data and it has the expected structure before updating state
//         if (data && data.properties && data.properties.periods) {
//           setWeatherData(data.properties.periods);
//           setFilteredData(data.properties.periods); // Initialize filteredData with all data
//         } else {
//           console.error('Invalid weather data structure:', data);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (e) => {
//     const { value } = e.target;
//     setSearchDate(value);

//     // Filter data based on search date
//     const filtered = weatherData.filter((period) => period.startTime.includes(value));
//     setFilteredData(filtered);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>AstroDash</h1>
//         <input
//           type="date"
//           value={searchDate}
//           onChange={handleSearch}
//         />
//       </header>
//       <main>
//         <div className="WeatherList">
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Temperature (°F)</th>
//                 <th>Wind Speed</th>
//                 <th>Short Forecast</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map((period, index) => {
//                 console.log(`Rendering row ${index}:`, period);
//                 return (
//                   <tr key={index}>
//                     <td>{period.startTime.split('T')[0]}</td>
//                     <td>{period.startTime.split('T')[1]}</td>
//                     <td>{period.temperature} °F</td>
//                     <td>{period.windSpeed}</td>
//                     <td>{period.shortForecast}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//           {filteredData.length === 0 && <p>No weather data available</p>}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [weatherData, setWeatherData] = useState([]);
//   const [searchDate, setSearchDate] = useState('');
//   const [temperatureFilter, setTemperatureFilter] = useState('');
//   const [windSpeedFilter, setWindSpeedFilter] = useState('');
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.weather.gov/gridpoints/OKX/33,36/forecast');
//         const data = await response.json();
//         console.log('Fetched weather data:', data);

//         // Ensure we have data and it has the expected structure before updating state
//         if (data && data.properties && data.properties.periods) {
//           setWeatherData(data.properties.periods);
//           setFilteredData(data.properties.periods); // Initialize filteredData with all data
//         } else {
//           console.error('Invalid weather data structure:', data);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     applyFilters();
//   }, [searchDate, temperatureFilter, windSpeedFilter, weatherData]);

//   const applyFilters = () => {
//     let filtered = weatherData;

//     if (searchDate) {
//       filtered = filtered.filter((period) => period.startTime.includes(searchDate));
//     }

//     if (temperatureFilter) {
//       filtered = filtered.filter((period) => period.temperature.includes(temperatureFilter));
//     }

//     if (windSpeedFilter) {
//       filtered = filtered.filter((period) => period.windSpeed.includes(windSpeedFilter));
//     }

//     setFilteredData(filtered);
//   };

//   const handleSearch = (e) => {
//     const { value } = e.target;
//     setSearchDate(value);
//   };

//   const handleTemperatureFilter = (e) => {
//     const { value } = e.target;
//     setTemperatureFilter(value);
//   };

//   const handleWindSpeedFilter = (e) => {
//     const { value } = e.target;
//     setWindSpeedFilter(value);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>AstroDash</h1>
//         <input
//           type="date"
//           value={searchDate}
//           onChange={handleSearch}
//         />
//         <input
//           type="text"
//           placeholder="Filter by Temperature"
//           value={temperatureFilter}
//           onChange={handleTemperatureFilter}
//         />
//         <input
//           type="text"
//           placeholder="Filter by Wind Speed"
//           value={windSpeedFilter}
//           onChange={handleWindSpeedFilter}
//         />
//       </header>
//       <main>
//         <div className="WeatherList">
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Temperature (°F)</th>
//                 <th>Wind Speed</th>
//                 <th>Short Forecast</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map((period, index) => {
//                 console.log(`Rendering row ${index}:`, period);
//                 return (
//                   <tr key={index}>
//                     <td>{period.startTime.split('T')[0]}</td>
//                     <td>{period.startTime.split('T')[1]}</td>
//                     <td>{period.temperature} °F</td>
//                     <td>{period.windSpeed}</td>
//                     <td>{period.shortForecast}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//           {filteredData.length === 0 && <p>No weather data available</p>}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
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

        // Ensure we have data and it has the expected structure before updating state
        if (data && data.properties && data.properties.periods) {
          setWeatherData(data.properties.periods);
          setFilteredData(data.properties.periods); // Initialize filteredData with all data
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
        // Handle cases where temperature data might be null
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
        <div className="WeatherList">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Temperature (°F)</th>
                <th>Wind Speed</th>
                <th>Short Forecast</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((period, index) => {
                console.log(`Rendering row ${index}:`, period);
                return (
                  <tr key={index}>
                    <td>{period.startTime.split('T')[0]}</td>
                    <td>{period.startTime.split('T')[1]}</td>
                    <td>{period.temperature} °F</td>
                    <td>{period.windSpeed}</td>
                    <td>{period.shortForecast}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filteredData.length === 0 && <p>No weather data available</p>}
        </div>
      </main>
    </div>
  );
}

export default App;

