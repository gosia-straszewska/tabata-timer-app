import React, { Component } from 'react';

export class IntervalSettings extends Component {


    render() {
        return (
            <div className="interval-settings">
                <div className="settings-section">
                    <label id="sets">Sets</label>
                    <div>
                        <button id="sets-decrement" onClick={this.props.decreaseSets}>-</button>
                        <span id="sets-length">{this.props.defaultSetsLength}</span>
                        <button id="sets-increment" onClick={this.props.increaseSets}>+</button>
                    </div>
                </div>
                <div>
                    <section className="container-controler">
                        <button className="start-stop-btn-option" style={this.props.isStart ? {background: "rgb(219, 93, 93)", border: "rgb(219, 93, 93)"} : {background: "rgb(83, 185, 83)"}} onClick={this.props.onStartStop}>{this.props.isStart ? 'Stop' : 'Start'}</button>
                        <button className="reset-btn-option" onClick={this.props.onReset}>Reset</button>
                    </section>
                </div>
                <div className="settings-section">
                    <label id="session">Sessions</label>
                    <div>
                        <button id="session-decrement" onClick={this.props.decreaseSession}>-</button>
                        <span id="session-length">{this.props.defaultSessionLength}</span>
                        <button id="session-increment" onClick={this.props.increaseSession}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}