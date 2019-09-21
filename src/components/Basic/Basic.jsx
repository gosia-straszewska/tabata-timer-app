import React, { Component } from 'react';
import {Timer} from './Timer.jsx';
import { Settings } from './Settings.jsx';

export class Basic extends Component {
    state = {
        timerName: 'Prepare',
        timeLeftInSecond: Number.parseInt("40", 10) 
    }
    render() {
        return (
            <div className="container-basic">
                <h4 className="logo">Tabata Timer</h4>
                <h1 className="title-basic">Basic setup</h1>
                <Settings
                    defaultPrepareLength = '00:10'
                    defaultBreakLength = '00:10'
                    defaultSessionLength = '00:20' 
                />
                <Timer
                    timerName={this.state.timerName}
                    timeLeftInSecond={this.state.timeLeftInSecond}
                />
            </div>
        )
    }
}