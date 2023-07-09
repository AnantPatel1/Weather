import React from "react";
import styles from "./UpcommingWeather.module.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
export default function Weather() {
  return (
    <div className={styles.weather}>
      <div className={styles.WeatherDetails}>
        <div className={styles.upcommingweather}>
          <div>
            {" "}
            <p>Upcomming hours</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button>
              <span>Rain precipitation</span>
              <KeyboardArrowDownOutlinedIcon sx="transform:scale(0.5)" />
            </button>

            <button>
              <span> Next Day</span>

              <KeyboardArrowRightOutlinedIcon sx="transform:scale(0.5)" />
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
