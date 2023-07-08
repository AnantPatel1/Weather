import React from "react";
import styles from "./UpcommingWeather.module.css";
export default function Weather() {
  return (
    <div className={styles.weather}>
      <div className={styles.WeatherDetails}></div>
    </div>
  );
}
