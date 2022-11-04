import styles from './WeatherApp.module.scss';
import Image from 'next/image'

import WeatherTable from '../components/WeatherTable';

import { useState } from "react";

const WeatherApp = () => {

  // Set type of weather
  const [weatherType, setWeatherType] = useState("sunny");

  // Chart Data:


  const labels = ["09:00", "12:00", "15:00", "18:00", "21:00", "00:00"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Temperature",
        pointBackgroundColor: 'white',
        backgroundColor: 'white',
        bordercolor: "white",
        data: [3, 6, 7, 2, 0, -5],
      },
    ],
  };

  return ( 
    <div className={styles.container}>
      {weatherType == "sunny" ?  <Image 
        className={styles.landingImage}
        src="/background_sunny.svg"
        alt="Sunny background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      /> : ''}
      {weatherType == "rainy" ?  <Image 
        className={styles.landingImage}
        src="/background_rainy.svg"
        alt="Rainy background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      /> : ''}
      <div className={styles.landingWrapper}>
        <div className={styles.landingSearch}>
          <div className={styles.searchBox}>
            <input type="text" value="Søk sted" />
            <button>Søk</button>
          </div>
        </div>
        <div className={styles.landingHeading}>
          <div className={styles.tempNow}>
            <h1>-5°</h1>
          </div>
          <div className={styles.weatherType}>
            <h1>Sol</h1>
            <p>Blaker, Norway</p>
          </div>
        </div>
        <WeatherTable />
      </div>
    </div> );
}
 
export default WeatherApp;