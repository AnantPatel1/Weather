import React from "react";
import styles from "./Header.module.css";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export default function Header() {
  return (
    <div className={styles.header}>
      <AddCircleIcon className={styles.icon} sx="transform:scale(1.5)" />
      <MoreHorizIcon className={styles.icon} sx="transform:scale(2)" />
      <ToggleOffIcon className={styles.icon} sx="transform:scale(2)" />
    </div>
  );
}
