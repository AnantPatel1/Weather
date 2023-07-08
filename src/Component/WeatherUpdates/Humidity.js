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
          <p>good</p>
          <div className={styles.progres1}></div>
        </div>
        <div>
          <p>normal</p>
          <div className={styles.progres2}></div>
        </div>
        <div>
          <p>bad</p>
          <div className={styles.progres3}></div>
        </div>
      </div>
    </div>
  );
}
