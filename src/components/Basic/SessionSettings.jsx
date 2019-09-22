import React, { Component } from 'react';

export class SessionSettings extends Component {
    render() {
        return (
            <div className="settings">
                <div className="settings-section">
                    <label id="preparation">Prepare</label>
                    <div>
                        <span id="preparation-length">{this.props.defaultPrepareLength}</span>
                    </div>
                </div>
                <div className="settings-section">
                    <label id="workout">Work</label>
                    <div>
                        <span id="workout-length">{this.props.defaultWorkoutLength}</span>
                    </div>
                </div>
                <div className="settings-section">
                    <label id="break">Rest</label>
                    <div>
                        <span id="break-length">{this.props.defaultBreakLength}</span>
                    </div>
                </div>
            </div>
        )
    }
}