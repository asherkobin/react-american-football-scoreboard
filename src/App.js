import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import { getState } from "expect/build/jestMatchersObject";

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{ homeScore }</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{ awayScore }</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={handleHomeTouchdownClick}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={handleHomeFieldGoalClick}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={handleAwayTouchdownClick}>>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={handleAwayFieldGoalClick}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
  
  function handleHomeTouchdownClick() {
    setHomeScore(homeScore + 7);
  }

  function handleHomeFieldGoalClick() {
    setHomeScore(homeScore + 3);
  }

  function handleAwayTouchdownClick() {
    setAwayScore(awayScore + 7);
  }

  function handleAwayFieldGoalClick() {
    setAwayScore(awayScore + 3);
  }
}

export default App;
