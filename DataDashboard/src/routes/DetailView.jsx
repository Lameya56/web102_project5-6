import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetailView.css';

const DetailView= () => {
  const { date } = useParams();
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(`https://api.weather.gov/gridpoints/OKX/33,36/forecast`);
        const data = await response.json();
        console.log('Fetched weather data:', data);

        if (data && data.properties && data.properties.periods) {
          const forecastForDate = data.properties.periods.find(period => period.startTime.includes(date));
          setForecastData(forecastForDate);
          setLoading(false);
        } else {
          console.error('Invalid weather data structure:', data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchForecast();
  }, [date]);

  if (loading) {
    return <div>Loading forecast details...</div>;
  }

  if (!forecastData) {
    return <div>Error: Unable to fetch forecast details for the specified date.</div>;
  }

  return (
    <div className="detail-container">
      <h2 className="detail-header">Forecast Details for {forecastData.name}</h2>
      <div className="forecast-info">
      <p>Date: {forecastData.startTime.split('T')[0]}</p>
      <p>Time: {forecastData.startTime.split('T')[1]}</p>
      <p>Temperature: {forecastData.temperature} °F</p>
      <p>Wind Speed: {forecastData.windSpeed}</p>
      <p>Short Forecast: {forecastData.shortForecast}</p>
      <p>Detailed Forecast: {forecastData.detailedForecast}</p>
      </div>
    </div>
  );
};

export default DetailView;