import React, { Component } from 'react';
import { Controler } from './Controler.jsx'

export class IntervalSettings extends Component {
    render(){
        return(
            <div className="interval-settings">
                <div className="settings-section">
                    <label id="sets">Sets</label>
                    <div>
                        <span id="sets-length">{this.props.defaultSetsLength}</span>
                    </div>
                </div>
                    <Controler/>
                <div className="settings-section">
                    <label id="session">Sessions</label>
                    <div>
                        <span id="session-length">{this.props.defaultSessionLength}</span>
                    </div>
                </div>
            </div>
        )
    }
}