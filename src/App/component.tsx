import React, { Component } from 'react';
import './styles.scss';
import { Props, State } from './types';

export default class App extends Component<Props, State> {
    render() {
        return (
            <div className="App">
                <button onClick={() => this.props.gotoHome()}> go </button>
                <button onClick={() => this.props.gotoUser('2')}> go </button>
            </div>
        );
    }
}