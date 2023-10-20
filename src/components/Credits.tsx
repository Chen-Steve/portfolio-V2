import React from "react";
import styles from "@/styles/Credits.module.css";

const Credits: React.FC = () => {
  return (
      <div id="credits" className={styles.credits}>
        <div className={styles["ending-credits"]}>
          <div>Built and designed by Steven Chen. </div>
          <div>All rights reserved. ©</div>
        </div>
      </div>
  );
};

export default Credits;