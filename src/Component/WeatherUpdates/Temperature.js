import styles from "./Temperature.module.css";
import React from "react";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
export default function Feel() {
  return (
    <div className={styles.feel}>
      <div className={styles.humidity}>
        <p>Feel's Like</p>
        <p className={styles.icon}>
          <DeviceThermostatIcon className={styles.muiicon} />
        </p>
      </div>
      <p className={styles.percentage}>30°</p>
      <div className={styles.degrees}>
        <p>0°</p>
        <p>20°</p>
        <p>50°</p>
      </div>

      <div className={styles.progressbar}>
        <div className={styles.progress}></div>
      </div>
    </div>
  );
}
