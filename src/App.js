import React, { Component } from 'react';
import './App.css';
import Particle from './particle';

const colorMap = {
  red: 'r',
  green: 'g',
  blue: 'b',
  purple: 'p',
  yellow: 'y',
  cyan: 'c',
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      color: 'red',
    };
  }

  off = () => Particle.setLights('solid', 'k')
  on = () => Particle.setLights('solid', 'w')
  setColor = (c) => {
    Particle.setLights('solid', colorMap[c]);
    this.setState({ color: c });
  }
  fade = () => Particle.setLights('fade', colorMap[this.state.color])
  pulse = () => Particle.setLights('pulse', colorMap[this.state.color])
  rainbow = () => Particle.setLights('rainbow', 'r')

  render() {
    return (
      <div className="App">
        <div className="off" onClick={this.off}/>
        <div className="on" onClick={this.on}/>
        <div className="colors">
          <div className="color-option red" onClick={() => this.setColor('red')}/>
          <div className="color-option green" onClick={() => this.setColor('green')} />
          <div className="color-option blue" onClick={() => this.setColor('blue')} />
          <div className="color-option purple" onClick={() => this.setColor('purple')} />
          <div className="color-option yellow" onClick={() => this.setColor('yellow')} />
          <div className="color-option cyan" onClick={() => this.setColor('cyan')} />
        </div>
        <div className={"patterns " + this.state.color}>
          <div className="light-option fade" onClick={this.fade} />
          <div className="light-option pulse" onClick={this.pulse} />
        </div>
        <div className="rainbow" onClick={this.rainbow}/>
      </div>
    );
  }
}

export default App;
