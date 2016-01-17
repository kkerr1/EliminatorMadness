import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
  base: {
    background: 'blue',
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '1.5em'
  },

  block: {
    display: 'block'
  }
};

@Radium
export class App extends Component {
  render() {
    return (
      <div style={[styles.base]}>
      Hi! there
      </div>
    );
  }
}
