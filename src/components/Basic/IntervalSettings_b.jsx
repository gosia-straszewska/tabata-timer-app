import React, { Component } from 'react';

export class IntervalSettings extends Component {


    render() {
        return (
            <div className="interval-settings">
                <div className="settings-section">
                    <label id="sets">Sets</label>
                    <div>
                        <span id="sets-length">{this.props.defaultsetsNumber}</span>
                    </div>
                </div>
                <div>
                    <section className="container-controler">
                        <button className="start-stop-btn-option" disabled={this.props.disabled}
                        style={this.props.isStart ? {background: "rgb(219, 93, 93)", border: "rgb(219, 93, 93)"} : {background: "rgb(83, 185, 83)"}} 
                        onClick={this.props.onStartStop}>{this.props.isStart ? 'Stop' : 'Start'}</button>
                        <button className="reset-btn-option" onClick={this.props.onReset}>Reset</button>
                    </section>
                </div>
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