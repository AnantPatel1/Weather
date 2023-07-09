import styles from "./TodaysWeather.module.css";
import React from "react";
import Humidity from "../WeatherUpdates/Humidity";
import Wind from "../WeatherUpdates/Wind";
import Precipitation from "../WeatherUpdates/Precipitation";
import UVindex from "../WeatherUpdates/UVindex";
import Temperature from "../WeatherUpdates/Temperature";
import Rain from "../WeatherUpdates/Rain";
export default function TodaysWeather() {
  return (
    <div className={styles.TodaysWeather}>
      <header> More Detail's of Todays Weather</header>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.box}>
            <Humidity />
          </div>
          <div className={styles.box}>
            <Wind />
          </div>
          <div className={styles.box}>
            <Precipitation />
          </div>
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.box}>
            <UVindex />
          </div>
          <div className={styles.box}>
            <Temperature />
          </div>
          <div className={styles.box}>
            <Rain />
          </div>
        </div>
      </div>
    </div>
  );
}
