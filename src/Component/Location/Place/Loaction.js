import React from "react";
import styles from "./Location.module.css";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NewYork from "../../../Assets/newyork-removebg-preview.png";
export default function Loaction() {
  return (
    <div className={styles.Loaction}>
      <div className={styles.places}>
        <div>
          <p>
            <NearMeOutlinedIcon className={styles.icon} />
            New York, USA
          </p>
          <p>Today 9th July</p>
        </div>
        <div>
          <p>
            <WbTwilightIcon className={styles.icon} /> 07:19
          </p>
          <p>
            <WbTwilightIcon className={styles.icon} /> 19:32
          </p>{" "}
        </div>
      </div>
      <p className={styles.temperature}>
        <KeyboardArrowLeftIcon
          className={styles.icon}
          sx="transform:scale(2)"
          style={{ marginRight: "20%" }}
        />
        27°
        <KeyboardArrowRightIcon
          className={styles.icon}
          sx="transform:scale(2)"
          style={{ marginLeft: "20%" }}
        />
      </p>
      <p className={styles.sunny}>
        <WbSunnyOutlinedIcon /> Sunny
      </p>
      <img className={styles.cityimg} src={NewYork} alt="New York" />
    </div>
  );
}
