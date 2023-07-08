import React from "react";
import styles from "./Wind.module.css";
import AirIcon from "@mui/icons-material/Air";
import SpeedIcon from "@mui/icons-material/Speed";
export default function Wind() {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.Wind}>
        <p>Wind</p>
        <p className={styles.icon}>
          <AirIcon className={styles.muiicon} />
        </p>
      </div>
      <div className={styles.semicircle}>
        <SpeedIcon sx={{ transform: "scale(5.5)" }} />
      </div>
    </div>
  );
}
