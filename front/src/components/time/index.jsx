import React, { useState, useEffect } from "react";
import "./CountdownTimer.scss"; // Yeni SCSS faylını əlavə et

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
    <div className="countdown-container">
      <div className="timer-box">
        <div className="time-unit">
          <div className="label">Days</div>
          <span className="value">{String(timeLeft.days).padStart(2, "0")}</span>
        </div>
        <span className="separator">:</span>
        <div className="time-unit">
          <div className="label">Hours</div>
          <span className="value">{String(timeLeft.hours).padStart(2, "0")}</span>
        </div>
        <span className="separator">:</span>
        <div className="time-unit">
          <div className="label">Minutes</div>
          <span className="value">{String(timeLeft.minutes).padStart(2, "0")}</span>
        </div>
        <span className="separator">:</span>
        <div className="time-unit">
          <div className="label">Seconds</div>
          <span className="value">{String(timeLeft.seconds).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
