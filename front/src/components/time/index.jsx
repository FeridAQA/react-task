import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "center", fontSize: "24px", gap: "15px" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "16px", marginBottom: "5px" }}>Days</div>
          <span style={{ fontSize: "40px", fontWeight: "bold" }}>{String(timeLeft.days).padStart(2, "0")}</span>
        </div>
        <span style={{ fontSize: "40px", color: "red", alignSelf: "center" }}>:</span>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "16px", marginBottom: "5px" }}>Hours</div>
          <span style={{ fontSize: "40px", fontWeight: "bold" }}>{String(timeLeft.hours).padStart(2, "0")}</span>
        </div>
        <span style={{ fontSize: "40px", color: "red", alignSelf: "center" }}>:</span>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "16px", marginBottom: "5px" }}>Minutes</div>
          <span style={{ fontSize: "40px", fontWeight: "bold" }}>{String(timeLeft.minutes).padStart(2, "0")}</span>
        </div>
        <span style={{ fontSize: "40px", color: "red", alignSelf: "center" }}>:</span>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "16px", marginBottom: "5px" }}>Seconds</div>
          <span style={{ fontSize: "40px", fontWeight: "bold" }}>{String(timeLeft.seconds).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
