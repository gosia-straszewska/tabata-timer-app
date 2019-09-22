import React, { Component } from 'react';
import { Timer } from './Timer.jsx';
import { SessionSettings } from './SessionSettings.jsx';
import { IntervalSettings } from './IntervalSettings.jsx';

export class Basic extends Component {
    state = {
        timerName: 'Total',
        timeLeftInMinutes: Math.floor(250 / 60),
        timeLeftInSeconds: 250 % 60,

    }
    render() {
        return (
            <div className="container-basic">
                <h4 className="logo">Tabata Timer</h4>
                <h1 className="title-basic">Basic setup</h1>
                <div className="timer-container">
                        <SessionSettings
                            defaultPrepareLength='00:10'
                            defaultBreakLength='00:10'
                            defaultWorkoutLength='00:20'
                        />
                        <Timer
                            timerName={this.state.timerName}
                            timeLeftInMinutes={this.state.timeLeftInMinutes}
                            timeLeftInSeconds={this.state.timeLeftInSeconds}
                        />
                        <IntervalSettings
                            defaultSetsLength={8}
                            defaultSessionLength={1}
                        />
                </div>
            </div>
        )
    }
}