import styles from './WeatherApp.module.css';
import Image from 'next/image'

import { useState } from "react";

const WeatherApp = () => {

  const [weatherType, setWeatherType] = useState("Summer");

  return ( 
    <div className={styles.container}>
      <Image 
        className={styles.backgroundSummer}
        src="/backgrounds_Sunny.svg"
        alt="Summer background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div> );
}
 
export default WeatherApp;