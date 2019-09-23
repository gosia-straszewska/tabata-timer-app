import React, { Component } from 'react';

const formatTime = (timeLeftInSecond) => {
    let minute = Math.floor(timeLeftInSecond / 60);
    if (minute < 10) minute = '0' + minute;
  
    let second = timeLeftInSecond - 60 * minute;
    if (second < 10) second = '0' + second;
  
    return `${minute}:${second}`;
}

export class Timer extends Component {
    render() {
        return (
                <div className="timer">
                    <div className="timer-content">
                        <label id="timer-name">{this.props.timerName}</label>
                        <span id="time-left">{formatTime(this.props.totalTime)}</span>
                    </div>
                </div>
        )
    }
}