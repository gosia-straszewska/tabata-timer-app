import React, { Component } from 'react';
import { Timer } from './Timer_b.jsx';
import { SessionSettings } from './SessionSettings_b.jsx';
import { IntervalSettings } from './IntervalSettings_b.jsx';
import { Link } from 'react-router-dom';
import UIfx from 'uifx';
import BellMp3 from '../../sounds/Bell.mp3';

const beep = new UIfx(BellMp3);

export class Basic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerName: 'Prepare',
            isStart: false,
            preparationTime: 10,
            workoutTime: 20,
            worktime: 0,
            breakTime: 10,
            setsLength: 8,
            sessionLength: 1,
            timerInterval: null,
            totalTime: 0,
            timeLeftInSeconds: 0,
            timeLeftInMinutes: 0,
            border: 'rgb(83, 185, 83)',
            stop: false,
            disabled: false,
            sound: beep,
        }

        this.onReset = this.onReset.bind(this);
        this.onStartStop = this.onStartStop.bind(this);
        this.decreaseTotalTimer = this.decreaseTotalTimer.bind(this);
        this.setTime = this.setTime.bind(this);
        
    };

    componentDidMount() {
        this.setTime();
    }

    setTime(){
        this.setState({
            totalTime: this.state.setsLength * (this.state.workoutTime + this.state.breakTime) + this.state.preparationTime,

            timeLeftInMinutes: Math.floor((this.state.setsLength * (this.state.workoutTime + this.state.breakTime) + this.state.preparationTime) / 60),

            timeLeftInSeconds: (this.state.setsLength * (this.state.workoutTime + this.state.breakTime) + this.state.preparationTime) % 60,
            
            worktime: this.state.preparationTime 

        })
    }

    onStartStop() {
        if (!this.state.isStart) {
            this.setState({
                isStart: !this.state.isStart,
                timerInterval: setInterval(() => {
                    this.decreaseTotalTimer();
                    if(this.state.stop === true) {
                        clearInterval(this.state.timerInterval);
                    }
                }, 1000),
            })
        } else {
            this.state.timerInterval && clearInterval(this.state.timerInterval);

            this.setState({
                isStart: !this.state.isStart,
                timerInterval: null,

            });
        }
    }

    decreaseTotalTimer() {
        this.setState({
            totalTime: this.state.totalTime - 1,
            worktime: this.state.worktime - 1
        });

        //
        console.log(this.state);

        if (this.state.worktime === 0 && this.state.timerName === 'Prepare') {
            this.setState({
                timerName: 'Work',
                workoutTime: this.state.workoutTime,
                worktime: this.state.workoutTime,
                border: 'rgb(219, 93, 93)'
            });
        } else if (this.state.worktime === 0 && this.state.timerName === 'Work') {
            
            this.setState({
                timerName: 'Break',
                breakTime: this.state.breakTime,
                worktime: this.state.breakTime,
                border: '#6DD5E3'
            })
        } else if (this.state.worktime === 0 && this.state.timerName === 'Break') {

            if(this.state.setsLength === 1) {
                this.setState({
                    timerName: 'Finished',
                    totalTime: 0,
                    border: 'yellow',
                    setsLength: 0,
                    stop: true,
                    disabled: true,
                });
            } else {
                this.setState({
                    timerName: 'Work',
                    // workoutTime: this.state.workoutTime - 1,
                    worktime: this.state.workoutTime,
                    setsLength: this.state.setsLength - 1,
                    border: 'rgb(219, 93, 93)'
                });
            }
        } else if (this.state.worktime === 2) {
            this.state.sound.play();
        }
    }

    

    // działa
    onReset() {
        this.setState({
            timerName: 'Prepare',
            isStart: false,
            preparationTime: 10,
            workoutTime: 20,
            worktime: 0,
            breakTime: 10,
            setsLength: 8,
            sessionLength: 1,
            timerInterval: null,
            totalTime: 0,
            timeLeftInSeconds: 0,
            timeLeftInMinutes: 0,
            border: 'rgb(83, 185, 83)',
            stop: false,
            disabled: false,
        });
        let self = this;
           setTimeout(function(){
                self.setTime();
           },1)
    };

    render() {
        const { timeLeftInMinutes, timeLeftInSeconds } = this.state;

        return (
            <div className="container-basic">
                <div className="header">
                    <h4 className="logo">Tabata Timer</h4>
                    <Link to="/"><button className="return-btn">Go back</button></Link>
                </div>
                <h1 className="title-basic">Basic setup</h1>
                <div className="timer-container">
                    <SessionSettings
                        defaultPrepareLength={this.state.preparationTime}
                        defaultBreakLength={this.state.breakTime}
                        defaultWorkoutLength={this.state.workoutTime}
                    />
                    <Timer
                        timerName={this.state.timerName}
                        totalTime={this.state.totalTime}
                        timeLeftInMinutes={timeLeftInMinutes}
                        timeLeftInSeconds={timeLeftInSeconds}
                        preparationTime={this.state.preparationTime}
                        worktime={this.state.worktime}
                        border={this.state.border}
                    />
                    <IntervalSettings
                        defaultsetsNumber={this.state.setsLength}
                        defaultSessionLength={this.state.sessionLength}
                        // buttons
                        onReset={this.onReset}
                        onStartStop={this.onStartStop}
                        isStart={this.state.isStart}
                        disabled={this.state.disabled}
                    />
                </div>
            </div>
        )
    }
}