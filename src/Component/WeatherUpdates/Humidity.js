import React from "react";
import styles from "./Humidity.module.css";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
export default function Humidity() {
  return (
    <div>
      <div className={styles.humidity}>
        <p>Humidity</p>
        <p className={styles.icon}>
          <WaterDropOutlinedIcon className={styles.muiicon} />
        </p>
      </div>
      <p className={styles.percentage}>
        82%<span>bad</span>
      </p>
      <div className={styles.rating}>
        <div>
          <p>Good</p>
          <div className={styles.progres}></div>
        </div>
        <div>
          <p>Normal</p>
          <div className={styles.progres}></div>
        </div>
        <div>
          <p>Bad</p>
          <div className={styles.progres1}>
            <div className={styles.badprogres}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
