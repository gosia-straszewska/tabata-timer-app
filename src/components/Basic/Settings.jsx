import React, { Component } from 'react';

export class Settings extends Component {
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
                    <label id="break">Rest</label>
                    <div>
                        <span id="break-length">{this.props.defaultBreakLength}</span>
                    </div>
                </div>
                <div className="settings-section">
                    <label id="session">Work</label>
                    <div>
                        <span id="session-length">{this.props.defaultSessionLength}</span>
                    </div>
                </div>
            </div>
        )
    }
}