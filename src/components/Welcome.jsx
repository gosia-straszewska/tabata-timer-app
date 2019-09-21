import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export class Welcome extends Component {
    render() {
        return (
            <div className="app">
            <header className="welcome-header">
                Tabata timer
            </header>
            <section className="welcome-message">
                Let's workout!
            </section>
            <div><FontAwesomeIcon className="dumbbell" size="5x" icon={faDumbbell} /></div>
            <section className="container">
                <button className="welcome-btn-option"><Link to='/basic'>Basic</Link></button>
                <button className="welcome-btn-option"><Link to='/custom'>Custom</Link></button>
            </section>
            </div>
        )
    }
}