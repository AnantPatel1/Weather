import React from "react";
import styles from "./Rain.module.css";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
export default function Rain() {
  return (
    <div className={styles.rain}>
      <div className={styles.humidity}>
        <p>Feel's Like</p>
        <p className={styles.icon}>
          <BeachAccessIcon className={styles.muiicon} />
        </p>
      </div>
      <p className={styles.percentage}>40%</p>
      <div className={styles.degrees}>
        <p>0%</p>
        <p>25%</p>
        <p>50%</p>
        <p>75%</p>
        <p>100%</p>
      </div>
      <div className={styles.progressbar}>
        <div className={styles.progress}></div>
      </div>
    </div>
  );
}
