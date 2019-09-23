import React, { Component } from 'react';

const formatTime = (timeLeftInSecond) => {
    let minute = Math.floor(timeLeftInSecond / 60);
    if (minute < 10) minute = '0' + minute;
  
    let second = timeLeftInSecond - 60 * minute;
    if (second < 10) second = '0' + second;
  
    return `${minute}:${second}`;
};

export class SessionSettings extends Component {
    render() {
        return (
            <div className="settings">
                <div className="settings-section">
                    <label id="preparation">Prepare</label>
                    <div>
                        <span id="preparation-length">{formatTime(this.props.defaultPrepareLength)}</span>
                    </div>
                </div>
                <div className="settings-section">
                    <label id="workout">Work</label>
                    <div>
                        <span id="workout-length">{formatTime(this.props.defaultWorkoutLength)}</span>
                    </div>
                </div>
                <div className="settings-section">
                    <label id="break">Rest</label>
                    <div>
                        <span id="break-length">{formatTime(this.props.defaultBreakLength)}</span>
                    </div>
                </div>
            </div>
        )
    }
}