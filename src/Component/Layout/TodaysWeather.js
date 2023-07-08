import styles from "./TodaysWeather.module.css";
import React from "react";
import Humidity from "../WeatherUpdates/Humidity";
import Wind from "../WeatherUpdates/Wind";
import Precipitation from "../WeatherUpdates/Precipitation";
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
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
        </div>
      </div>
    </div>
  );
}
