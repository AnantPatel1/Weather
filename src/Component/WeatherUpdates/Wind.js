import React from "react";
import styles from "./Wind.module.css";
import AirIcon from "@mui/icons-material/Air";
import NorthWestOutlinedIcon from "@mui/icons-material/NorthWestOutlined";
export default function Wind() {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.Wind}>
        <p>Wind</p>
        <p className={styles.icon}>
          <AirIcon className={styles.muiicon} />
        </p>
      </div>
      <div className={styles.speedometer}>
        <div className={styles.wrapper}>
          <div className={styles["indicator-wrapper"]}>
            <div className={styles["indicator-wrapper-inner"]}>
              <div className={styles.indicator}></div>
            </div>
          </div>

          <div className={`${styles.bar} ${styles["bar-1"]}`}></div>
          <div className={`${styles.bar} ${styles["bar-2"]}`}></div>
          <div className={`${styles.bar} ${styles["bar-3"]}`}></div>
          <div className={`${styles.bar} ${styles["bar-4"]}`}></div>
        </div>
      </div>
      <NorthWestOutlinedIcon
        className={styles.arrow}
        sx="transform:scale(1.5)"
      />
      <p className={styles.speed}>8km/h</p>
    </div>
  );
}
