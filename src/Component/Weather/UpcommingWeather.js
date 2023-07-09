import React from "react";
import styles from "./UpcommingWeather.module.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Chart from "./Chart/WeatherChart";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
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
        <div className={styles.presentTemeperature}>
          <p>
            Now
            <WbSunnyOutlinedIcon />
          </p>
          <p>
            11:00
            <WbSunnyOutlinedIcon />
          </p>
          <p>
            12:00
            <CloudOutlinedIcon style={{ color: "#5c9ce5" }} />
          </p>
          <p>
            13:00
            <CloudOutlinedIcon style={{ color: "#5c9ce5" }} />
          </p>
          <p>
            14:00
            <WbSunnyOutlinedIcon />
          </p>
          <p>
            15:00
            <CloudOutlinedIcon style={{ color: "#5c9ce5" }} />
          </p>
          <p>
            16:00
            <CloudOutlinedIcon style={{ color: "#5c9ce5" }} />
          </p>
          <p>
            17:00
            <WbSunnyOutlinedIcon />
          </p>
        </div>
        <Chart />
      </div>
    </div>
  );
}
