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
    </div>
  );
}
