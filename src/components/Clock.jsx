import React, { useEffect, useState } from "react";

export const Clock = () => {
  const [clockState, setClockState] = useState(true);
  useEffect(() => {
    setInterval(() => {
       const date = new Date();
       setClockState(date.toLocaleTimeString())
    }, 1000);
  }, []);

  return <div style={{fontSize: '30px'}}>{clockState}</div>;
};
