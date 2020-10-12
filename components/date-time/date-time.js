import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import styles from "./date-time.module.css";

const DateTime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const minuteInterval = setInterval(() => {
      setNow(new Date());
    }, 60 * 1000);

    return () => {
      clearInterval(minuteInterval);
    };
  }, []);

  return (
    <div className="widget">
      <span>{format(now, "PPPP")}</span>
      <div className={styles.time}>{format(now, "HH:mm")}</div>
    </div>
  );
};

export default DateTime;
