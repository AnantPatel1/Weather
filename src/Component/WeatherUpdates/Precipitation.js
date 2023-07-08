import styles from "./Precipitation.module.css";
import React from "react";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
export default function Precipitation() {
  return (
    <div className={styles.precipitation}>
      <div className={styles.humidity}>
        <p>Precipitation</p>
        <p className={styles.icon}>
          <ThunderstormIcon className={styles.muiicon} />
        </p>
      </div>
      <p className={styles.percentage}>1.4 cm</p>
      <div className={styles.time}>
        <p>
          0 <div className={styles.bgblue}></div>
        </p>
        <p>
          {" "}
          10 <div className={styles.bgblue}></div>
        </p>
        <p>
          {" "}
          20 <div className={styles.bgblue}></div>
        </p>
        <p>
          {" "}
          30 <div className={styles.prepdiv}></div>
        </p>
        <p>
          {" "}
          40 <div className={styles.prepdiv}></div>
        </p>
        <p>
          50<div className={styles.prepdiv}></div>
        </p>
        <p>
          {" "}
          60 <div className={styles.prepdiv}></div>{" "}
        </p>
        <p>
          {" "}
          70 <div className={styles.prepdiv}></div>
        </p>
        <p>
          {" "}
          80 <div className={styles.prepdiv}></div>{" "}
        </p>
        <p>
          {" "}
          90 <div className={styles.prepdiv}></div>
        </p>
        <p>
          100 <div className={styles.prepdiv}></div>
        </p>
      </div>
    </div>
  );
}
