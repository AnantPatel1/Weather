import React from "react";
import UpcommingWeather from "../Weather/UpcommingWeather";
import styles from "./Layout.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TodaysWeather from "../Weather/TodaysWeather";
import Header from "../Location/Header/Header";
import Loaction from "../Location/Place/Loaction";
export default function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.container1}>
        <Header /> <Loaction />
      </div>
      <div className={styles.container2}>
        <div className={styles.userdetails}>
          <div className={styles.welcome}>
            <h3>Welcome back Isabella!</h3>
            <p>Check Out today's Weather information</p>
          </div>
          <div className={styles.avatar}>
            <MoreHorizIcon
              className={styles.icon}
              sx={{ transform: "scale(1.5)" }}
            />
            <img
              src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg"
              alt="user"
            />
          </div>
        </div>
        <UpcommingWeather />
        <TodaysWeather />
      </div>
    </div>
  );
}
