import styles from "./UVindex.module.css";
import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
export default function UVindex() {
  return (
    <div className={styles.precipitation}>
      <div className={styles.humidity}>
        <p>UV index</p>
        <p className={styles.icon}>
          <WbSunnyIcon className={styles.muiicon} />
        </p>
      </div>
      <p className={styles.percentage}>
        4<span>medium</span>
      </p>
      <div className={styles.time}>
        <p>
          0-2<div className={styles.bgblue}></div>
        </p>
        <p>
          {" "}
          3-5{" "}
          <div className={styles.prepdiv}>
            <div className={styles.halfill}></div>
          </div>
        </p>
        <p>
          {" "}
          6-8 <div className={styles.prepdiv}></div>
        </p>
        <p>
          {" "}
          8-10 <div className={styles.prepdiv}></div>
        </p>
        <p>
          {" "}
          11+ <div className={styles.prepdiv}></div>
        </p>
      </div>
    </div>
  );
}
