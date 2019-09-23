import React, { Component } from 'react';
import { Timer } from './Timer_c.jsx';
import { SessionSettings } from './SessionSettings_c.jsx';
import { IntervalSettings } from './IntervalSettings_c.jsx';
import {Link} from 'react-router-dom';

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
    };

    componentDidMount() {
        this.setState({
            totalTime: this.state.setsLength * (this.state.workoutTime + this.state.breakTime) + this.state.preparationTime,

            timeLeftInMinutes: Math.floor((this.state.setsLength * (this.state.workoutTime + this.state.breakTime) + this.state.preparationTime) / 60),

            timeLeftInSeconds: (this.state.setsLength * (this.state.workoutTime + this.state.breakTime) + this.state.preparationTime) % 60,
        })
    }

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


    //Zmiana cyklu!!!
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

    render() {
        const {totalTime, timeLeftInMinutes, timeLeftInSeconds} = this.state;

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
                        // buttons
                        onReset={this.onReset}
                        onStartStop={this.onStartStop}
                        isStart={this.state.isStart}
                    />
                </div>
            </div>
        )
    }
}