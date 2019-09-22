import React, { Component } from 'react';

export class Controler extends Component {
    render(){
        return(
            <div>
            <section className="container-controler">
                <button className="start-btn-option">Start</button>
                <button className="stop-btn-option">Stop</button>
                <button className="reset-btn-option">Reset</button>
            </section>
            </div>
        )
    }
}