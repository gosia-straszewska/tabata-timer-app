import React, { Component } from "react";
import { Timer } from "./Timer_c.jsx";
import { SessionSettings } from "./SessionSettings_c.jsx";
import { IntervalSettings } from "./IntervalSettings_c.jsx";
import { Link } from "react-router-dom";
import UIfx from "uifx";
import BellMp3 from "../../sounds/Bell.mp3";

const beep = new UIfx(BellMp3);

export class Custom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerName: "Prepare",
      isStart: false,
      preparationTime: 10,
      workoutTime: 20,
      worktime: 0,
      breakTime: 10,
      setsLength: 1,
      sessionLength: 1,
      timerInterval: null,
      totalTime: 0,
      timeLeftInSeconds: 0,
      timeLeftInMinutes: 0,
      setTime: 0,
      border: "rgb(83, 185, 83)",
      stop: false,
      disabled: false,
      sound: beep
    };

    this.onReset = this.onReset.bind(this);
    this.onStartStop = this.onStartStop.bind(this);
    this.decreaseTotalTimer = this.decreaseTotalTimer.bind(this);
    this.increaseSets = this.increaseSets.bind(this);
    this.decreaseSets = this.decreaseSets.bind(this);
    this.increaseSession = this.increaseSession.bind(this);
    this.decreaseSession = this.decreaseSession.bind(this);
    this.increasePreparation = this.increasePreparation.bind(this);
    this.decreasePreparation = this.decreasePreparation.bind(this);
    this.increaseWorkout = this.increaseWorkout.bind(this);
    this.decreaseWorkout = this.decreaseWorkout.bind(this);
    this.increaseBreak = this.increaseBreak.bind(this);
    this.decreaseBreak = this.decreaseBreak.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  componentDidMount() {
    this.setTime();
  }

  setTime() {
    this.setState({
      totalTime:
        (this.state.setsLength *
          (this.state.workoutTime + this.state.breakTime) +
          this.state.preparationTime) *
        this.state.sessionLength,

      timeLeftInMinutes: Math.floor(
        (this.state.setsLength *
          (this.state.workoutTime + this.state.breakTime) +
          this.state.preparationTime) /
        60
      ),

      timeLeftInSeconds:
        (this.state.setsLength *
          (this.state.workoutTime + this.state.breakTime) +
          this.state.preparationTime) %
        60,

      worktime: this.state.preparationTime,

      sessionTime:
        this.state.setsLength *
        (this.state.workoutTime + this.state.breakTime) +
        this.state.preparationTime
    });
    console.log(this.state);
  }
  // metody do przycisków
  //PREAPRE - działa
  increasePreparation() {
    if (this.state.preparationTime < 60 && !this.state.isStart) {
      this.setState({
        preparationTime: this.state.preparationTime + 10,
        totalTime:
          (this.state.setsLength *
            (this.state.workoutTime + this.state.breakTime) +
            (this.state.preparationTime + 10)) *
          this.state.sessionLength,
        worktime: this.state.preparationTime + 10
      });
    }
  }

  decreasePreparation() {
    if (this.state.preparationTime > 10 && !this.state.isStart) {
      this.setState({
        preparationTime: this.state.preparationTime - 10,
        totalTime:
          this.state.setsLength *
          (this.state.workoutTime + this.state.breakTime) +
          (this.state.preparationTime - 10) * this.state.sessionLength,
        worktime: this.state.preparationTime - 10
      });
    }
  }
  //WORK- działa
  increaseWorkout() {
    if (this.state.workoutTime < 300 && !this.state.isStart) {
      this.setState({
        workoutTime: this.state.workoutTime + 20,
        totalTime:
          (this.state.setsLength *
            (this.state.workoutTime + 20 + this.state.breakTime) +
            this.state.preparationTime) *
          this.state.sessionLength
      });
    }
  }

  decreaseWorkout() {
    if (this.state.workoutTime > 20 && !this.state.isStart) {
      this.setState({
        workoutTime: this.state.workoutTime - 20,
        totalTime:
          this.state.setsLength *
          (this.state.workoutTime - 20 + this.state.breakTime) +
          this.state.preparationTime * this.state.sessionLength
      });
    }
  }
  //BREAK
  increaseBreak() {
    if (this.state.breakTime < 300 && !this.state.isStart) {
      this.setState({
        breakTime: this.state.breakTime + 10,
        totalTime:
          (this.state.setsLength *
            (this.state.workoutTime + (this.state.breakTime + 10)) +
            this.state.preparationTime) *
          this.state.sessionLength
      });
    }
  }

  decreaseBreak() {
    if (this.state.breakTime > 10 && !this.state.isStart) {
      this.setState({
        breakTime: this.state.breakTime - 10,
        totalTime:
          this.state.setsLength *
          (this.state.workoutTime + (this.state.breakTime - 10)) +
          this.state.preparationTime * this.state.sessionLength
      });
    }
  }

  //SETS - działa
  increaseSets() {
    if (this.state.setsLength < 15 && !this.state.isStart) {
      this.setState({
        setsLength: this.state.setsLength + 1,
        totalTime:
          (this.state.setsLength + 1) *
          (this.state.workoutTime + this.state.breakTime) +
          this.state.preparationTime
      });
    }
  }

  decreaseSets() {
    if (this.state.setsLength > 1 && !this.state.isStart) {
      this.setState({
        setsLength: this.state.setsLength - 1,
        totalTime:
          (this.state.setsLength - 1) *
          (this.state.workoutTime + this.state.breakTime) +
          this.state.preparationTime
      });
    }
  }

  //SESSIONS - działa
  increaseSession() {
    if (this.state.sessionLength < 5 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        totalTime:
          (this.state.setsLength *
            (this.state.workoutTime + this.state.breakTime) +
            this.state.preparationTime) *
          (this.state.sessionLength + 1)
      });
    }
  }

  decreaseSession() {
    if (this.state.sessionLength > 1 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        totalTime:
          (this.state.setsLength *
            (this.state.workoutTime + this.state.breakTime) +
            this.state.preparationTime) *
          (this.state.sessionLength - 1)
      });
    }
  }

  // Przyciski kontrolne DZIAŁA
  onStartStop() {
    if (!this.state.isStart) {
      this.setState({
        isStart: !this.state.isStart,
        timerInterval: setInterval(() => {
          this.decreaseTotalTimer();
          if (this.state.stop === true) {
            clearInterval(this.state.timerInterval);
          }
        }, 1000)
      });
    } else {
      this.state.timerInterval && clearInterval(this.state.timerInterval);

      this.setState({
        isStart: this.state.isStart,
        timerInterval: null
      });
    }
  }

  decreaseTotalTimer() {
    this.setState({
      totalTime: this.state.totalTime - 1,
      worktime: this.state.worktime - 1
    });
    console.log(this.state);

    if (this.state.worktime === 0 && this.state.timerName === "Prepare") {
      this.setState({
        timerName: "Work",
        workoutTime: this.state.workoutTime,
        worktime: this.state.workoutTime,
        border: "rgb(219, 93, 93)"
      });
    } else if (this.state.worktime === 0 && this.state.timerName === "Work") {
      this.setState({
        timerName: "Break",
        breakTime: this.state.breakTime,
        worktime: this.state.breakTime,
        border: "#6DD5E3"
      });
    } else if (this.state.worktime === 0 && this.state.timerName === "Break") {
      if (this.state.setsLength === 1) {
        this.setState({
          timerName: "Finished",
          totalTime: 0,
          border: "yellow",
          setsLength: 0,
          stop: true,
          disabled: true
        });
      } else {
        this.setState({
          timerName: "Work",
          // workoutTime: this.state.workoutTime - 1,
          worktime: this.state.workoutTime,
          setsLength: this.state.setsLength - 1,
          border: "rgb(219, 93, 93)"
        });
      }
    } else if (this.state.worktime === 2) {
      this.state.sound.play();
    }
  }

  //DZIAŁA
  onReset() {
    this.setState({
      timerName: "Prepare",
      isStart: false,
      preparationTime: 10,
      workoutTime: 20,
      worktime: 0,
      breakTime: 10,
      setsLength: 1,
      sessionLength: 1,
      timerInterval: null,
      totalTime: 0,
      timeLeftInSeconds: 0,
      timeLeftInMinutes: 0,
      border: "rgb(83, 185, 83)",
      stop: false,
      disabled: false
    });
    let self = this;
    setTimeout(function () {
      self.setTime();
    }, 1);
  }

  render() {
    const { totalTime, timeLeftInMinutes, timeLeftInSeconds } = this.state;

    return (
      <div className="container-basic">
        <div className="header">
          <h4 className="logo">Tabata Timer</h4>
          <Link to="/"><button className="return-btn">Go back</button></Link>
      </div>
      <h1 className="title-basic">Custom setup</h1>
      <div className="timer-container">
        <SessionSettings
          defaultPrepareLength={this.state.preparationTime}
          defaultBreakLength={this.state.breakTime}
          defaultWorkoutLength={this.state.workoutTime}
          decreasePreparation={this.decreasePreparation}
          increasePreparation={this.increasePreparation}
          decreaseWorkout={this.decreaseWorkout}
          increaseWorkout={this.increaseWorkout}
          decreaseBreak={this.decreaseBreak}
          increaseBreak={this.increaseBreak}
        />
        <Timer
          timerName={this.state.timerName}
          timeLeftInMinutes={timeLeftInMinutes}
          timeLeftInSeconds={timeLeftInSeconds}
          preparationTime={this.state.preparationTime}
          worktime={this.state.worktime}
          totalTime={totalTime}
          border={this.state.border}
        />
        <IntervalSettings
          defaultSetsLength={this.state.setsLength}
          defaultSessionLength={this.state.sessionLength}
          // buttons control
          onReset={this.onReset}
          onStartStop={this.onStartStop}
          isStart={this.state.isStart}
          disabled={this.state.disabled}
          // +/- buttons
          decreaseSets={this.decreaseSets}
          increaseSets={this.increaseSets}
          decreaseSession={this.decreaseSession}
          increaseSession={this.increaseSession}
        />
      </div>
      </div >
    );
  }
}
