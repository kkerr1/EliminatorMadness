import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import Radium from 'radium';

@Radium
class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/standings">Standings</Link>
        </header>
        <div style={[{marginTop: '1.5em'}]}>{this.props.children}</div>
      </div>
    );
  }
}
export default connect(null, { push: routeActions.push })(App);
