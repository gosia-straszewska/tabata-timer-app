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
                        <button id="preparation-decrement" onClick={this.props.decreasePreparation}>-</button>
                        <span id="preparation-length">{formatTime(this.props.defaultPrepareLength)}</span>
                        <button id="preparation-increment" onClick={this.props.increasePreparation}>+</button>
                    </div>
                </div>
                <div className="settings-section">
                    <label id="workout">Work</label>
                    <div>
                        <button id="workout-decrement" onClick={this.props.decreaseWorkout}>-</button>
                        <span id="workout-length">{formatTime(this.props.defaultWorkoutLength)}</span>
                        <button id="workout-increment" onClick={this.props.increaseWorkout}>+</button>
                    </div>
                </div>
                <div className="settings-section">
                    <label id="break">Rest</label>
                    <div>
                        <button id="break-decrement" onClick={this.props.decreaseBreak}>-</button>
                        <span id="break-length">{formatTime(this.props.defaultBreakLength)}</span>
                        <button id="break-increment" onClick={this.props.increaseBreak}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}