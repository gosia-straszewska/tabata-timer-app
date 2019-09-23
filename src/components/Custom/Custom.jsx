import React, { Component } from 'react';
import { Timer } from './Timer_c.jsx';
import { SessionSettings } from './SessionSettings_c.jsx';
import { IntervalSettings } from './IntervalSettings_c.jsx';
import { Link } from 'react-router-dom';

export class Custom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerName: 'Total',
            isStart: false,
            preparationTime: 10,
            workoutTime: 20,
            breakTime: 10,
            setsLength: 8,
            sessionLength: 1,
            timerInterval: null,
            totalTime: 0,
            timeLeftInSeconds: 0,
            timeLeftInMinutes: 0,
        }

        this.onReset = this.onReset.bind(this);
        this.onStartStop = this.onStartStop.bind(this);
        // this.decreaseSecondTimer = this.decreaseTimer.bind(this);
        this.phaseControl = this.phaseControl.bind(this);
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
    };
    // jak przypisać update totalTime np. do zmiennej, bez powtarzania kodu przy kazdym przycisku
    componentDidMount() {
        this.setState({
            totalTime: this.state.setsLength * (this.state.workoutTime + this.state.breakTime) + this.state.preparationTime,

            timeLeftInMinutes: Math.floor((this.state.setsLength * (this.state.workoutTime + this.state.breakTime) + this.state.preparationTime) / 60),

            timeLeftInSeconds: (this.state.setsLength * (this.state.workoutTime + this.state.breakTime) + this.state.preparationTime) % 60,
        })
    }

    // metody do przycisków
    //PREAPRE - działa
    increasePreparation(){
        if (this.state.preparationTime < 60 && !this.state.isStart) {
            this.setState({
                preparationTime: this.state.preparationTime + 10,
                totalTime: ((this.state.setsLength * (this.state.workoutTime + this.state.breakTime)) + (this.state.preparationTime+10)) * this.state.sessionLength,
            });
        }
    }

    decreasePreparation(){
        if (this.state.preparationTime > 0 && !this.state.isStart) {
            this.setState({
                preparationTime: this.state.preparationTime - 10,
                totalTime: (this.state.setsLength * (this.state.workoutTime + this.state.breakTime)) + (this.state.preparationTime-10) * this.state.sessionLength,
            });
        }
    }
    //WORK- działa
    increaseWorkout(){
        if (this.state.workoutTime < 300 && !this.state.isStart) {
            this.setState({
                workoutTime: this.state.workoutTime + 20,
                totalTime: ((this.state.setsLength * ((this.state.workoutTime+20) + this.state.breakTime)) + this.state.preparationTime) * this.state.sessionLength,
            });
        }
    }

    decreaseWorkout(){
        if (this.state.workoutTime > 20 && !this.state.isStart) {
            this.setState({
                workoutTime: this.state.workoutTime - 20,
                totalTime: (this.state.setsLength * ((this.state.workoutTime-20) + this.state.breakTime)) + this.state.preparationTime * this.state.sessionLength,
            });
        }
    }
    //BREAK
    increaseBreak(){
        if (this.state.breakTime < 300 && !this.state.isStart) {
            this.setState({
                breakTime: this.state.breakTime + 10,
                totalTime: ((this.state.setsLength * (this.state.workoutTime + (this.state.breakTime+10)) + this.state.preparationTime) * this.state.sessionLength),
            });
        }
    }

    decreaseBreak(){
        if (this.state.breakTime > 10 && !this.state.isStart) {
            this.setState({
                breakTime: this.state.breakTime - 10,
                totalTime: (this.state.setsLength * (this.state.workoutTime + (this.state.breakTime-10)) + this.state.preparationTime * this.state.sessionLength),
            });
        }
    }

    //SETS - działa
    increaseSets() {
        if (this.state.setsLength < 15 && !this.state.isStart) {
            this.setState({
                setsLength: this.state.setsLength + 1,
                totalTime: ((this.state.setsLength+1) * (this.state.workoutTime + this.state.breakTime)) + this.state.preparationTime,
            });
        }
    }

    decreaseSets() {
        if (this.state.setsLength > 1 && !this.state.isStart) {
            this.setState({
                setsLength: this.state.setsLength - 1,
                totalTime: (this.state.setsLength-1) * (this.state.workoutTime + this.state.breakTime) + this.state.preparationTime,
            });
        }
    }

    //SESSIONS - działa
    increaseSession() {
        if (this.state.sessionLength < 5 && !this.state.isStart) {
            this.setState({
                sessionLength: this.state.sessionLength + 1,
                totalTime: ((this.state.setsLength * (this.state.workoutTime + this.state.breakTime)) + this.state.preparationTime) * (this.state.sessionLength+1),
            });
        }
    }

    decreaseSession(){
        if (this.state.sessionLength > 1 && !this.state.isStart) {
            this.setState({
                sessionLength: this.state.sessionLength - 1,
                totalTime: ((this.state.setsLength * (this.state.workoutTime + this.state.breakTime)) + this.state.preparationTime) * (this.state.sessionLength-1),
            });
        }
    }


// Przyciski kontrolne DZIAŁA
    onStartStop() {
        if (!this.state.isStart) {
            this.setState({
                isStart: !this.state.isStart,
                timerInterval: setInterval(() => {
                    this.decreaseSecondTimer();
                    this.phaseControl();
                }, 1000)
            })
        } else {
            this.state.timerInterval && clearInterval(this.state.timerInterval);

            this.setState({
                isStart: !this.state.isStart,
                timerInterval: null
            });
        }
    }

    decreaseSecondTimer() {
        this.setState({
            totalTime: this.state.totalTime - 1,
            // timeLeftInMinutes: this.state.timeLeftInMinutes - 1
        });
    }

    onReset() {
        this.setState({
            timerName: 'Total',
            isStart: false,
            preparationTime: 10,
            workoutTime: 20,
            breakTime: 10,
            setsLength: 8,
            sessionLength: 1,
            timerInterval: null,
            totalTime: 250,
            timeLeftInSeconds: 0,
            timeLeftInMinutes: 0,
        });

        this.state.timerInterval && clearInterval(this.state.timerInterval);
    };


    //Zmiana cyklu!!! DO ZROBIENIA
    phaseControl() {
        if (this.state.timeLeftInSecond === 0) {
            this.setState({
                timerName: "Finished"
            })
        } else if (this.state.timeLeftInSecond === -1) {
            if (this.state.timerName === 'Work') {
                this.setState({
                    timerName: 'Rest',
                    timeLeftInSecond: this.state.breakLength * 60
                });
            } else {
                this.setState({
                    timerName: 'Work',
                    timeLeftInSecond: this.state.sessionLength * 60
                });
            }
        }
    }

    render() {
        const { totalTime, timeLeftInMinutes, timeLeftInSeconds } = this.state;

        // const totalTime = setsLength * (workoutTime + breakTime) + preparationTime;
        // // console.log(totalTime)
        // const timeLeftInMinutes = Math.floor(totalTime / 60);
        // const timeLeftInSeconds = totalTime % 60;

        return (
            <div className="container-basic">
                <div className="header">
                    <h4 className="logo">Tabata Timer</h4>
                    <button className="return-btn"><Link to='/'>Go back</Link></button>
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
                        increaseWorkout=
                        {this.increaseWorkout}
                        decreaseBreak={this.decreaseBreak}
                        increaseBreak={this.increaseBreak}

                    />
                    <Timer
                        timerName={this.state.timerName}
                        timeLeftInMinutes={timeLeftInMinutes}
                        timeLeftInSeconds={timeLeftInSeconds}
                        totalTime={totalTime}
                    />
                    <IntervalSettings
                        defaultSetsLength={this.state.setsLength}
                        defaultSessionLength={this.state.sessionLength}
                        // buttons control
                        onReset={this.onReset}
                        onStartStop={this.onStartStop}
                        isStart={this.state.isStart}
                        // +/- buttons
                        decreaseSets={this.decreaseSets}
                        increaseSets={this.increaseSets}
                        decreaseSession={this.decreaseSession}
                        increaseSession={this.increaseSession}
                    />
                </div>
            </div>
        )
    }
}