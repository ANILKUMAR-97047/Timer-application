import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [seconds, isRunning]);

  const startTimer = () => {
    setRunning(true);
  };
  const stopTimer = () => {
    setRunning(false);
  };
  const resetTimer = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <>
      <h1 style={{ color: "green", textDecoration: "underline" }}>TIMER APP</h1>
      <img
        className="timer-image"
        src="https://st5.depositphotos.com/88369228/74241/i/450/depositphotos_742410342-stock-photo-melting-clock-sun-lying-beach.jpg"
      />
      <div className="card">
        <h1>{formatTime(seconds)}</h1>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={startTimer}
        >
          Start Timer
        </button>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={stopTimer}
        >
          Stop Timer
        </button>
        <button
          style={{ backgroundColor: "orange", color: "black" }}
          onClick={resetTimer}
        >
          Reset Timer
        </button>
      </div>
      <p className="read-the-docs">Click The Start Timer Button</p>
    </>
  );

  function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours} : ${minutes} : ${secs}`;
  }
}

export default App;
