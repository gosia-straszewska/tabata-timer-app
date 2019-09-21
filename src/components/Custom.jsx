import React, { Component } from 'react';

export class Custom extends Component {
    render() {
        return (
            <div className="container-basic">
                <h4 className="logo">Tabata Timer</h4>
                <h1 className="title-basic">Custom setup</h1>
                <div className="settings">
                    <div className="settings-section">
                        <label id="preparation-label">Preparation</label>
                        <div>
                            <button id="preparation-decrement" onClick={this.props.onDecreasePreparation}>-</button>
                            <span id="preparation-length">{this.props.preparationLength}</span>
                            <button id="preparation-increment" onClick={this.props.onIncreasePreparation}>+</button>
                        </div>
                    </div>
                    <div className="settings-section">
                        <label id="break-label">Rest</label>
                        <div>
                            <button id="break-decrement" onClick={this.props.onDecreaseBreak}>-</button>
                            <span id="break-length">{this.props.breakLength}</span>
                            <button id="break-increment" onClick={this.props.onIncreaseBreak}>+</button>
                        </div>
                    </div>
                    <div className="settings-section">
                        <label id="session-label">Work</label>
                        <div>
                            <button id="session-decrement" onClick={this.props.onDecreaseSession}>-</button>
                            <span id="session-length">{this.props.sessionLength}</span>
                            <button id="session-increment" onClick={this.props.onIncreaseSession}>+</button>
                        </div>
                    </div>
                    <div className="settings-section">
                        <label id="sets-label">Sets</label>
                        <div>
                            <button id="sets-decrement" onClick={this.props.onDecreaseSets}>-</button>
                            <span id="sets-length">{this.props.setsLength}</span>
                            <button id="sets-increment" onClick={this.props.onIncreaseSets}>+</button>
                        </div>
                    </div>
                    <div className="settings-section">
                        <label id="cycles-label">Cycles</label>
                        <div>
                            <button id="cycles-decrement" onClick={this.props.onDecreaseCycles}>-</button>
                            <span id="cycles-length">{this.props.cyclesLength}</span>
                            <button id="cycles-increment" onClick={this.props.onIncreaseCycles}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}