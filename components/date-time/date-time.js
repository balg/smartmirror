import React, { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import styles from "./date-time.module.css";
import { WebSocketContext } from "../../contexts/WebSocketProvider/WebSocketProvider";

const DateTime = () => {
  const [now, setNow] = useState(new Date());
  const socketContext = useContext(WebSocketContext);

  useEffect(() => {
    const minuteInterval = setInterval(() => {
      setNow(new Date());
    }, 60 * 1000);

    socketContext.sendMessage("TEST", "This is just a test");
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
