import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import Radium, { StyleRoot, Style } from 'radium';
import { Grid, Cell } from 'radium-grid';
@Radium
class App extends Component {
  static styles = {
    link: {
      marginBottom: '1rem',
      padding: '.5rem 8px',
      background: '#eee',
      minWidth: '0'
    },
    global: {
      body: {
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        lineHeight: 1.5,
        margin: '0 auto',
        widht: '80%',
        color: '#666'
      },
      a: {
        color: 'orange'
      },
      p: {
        margin: 0
      }
    }
  };
  static propTypes = {
    children: PropTypes.node
  };
  render() {
    const {styles} = App;
    return (
      <StyleRoot>
      <Style rules={styles.global} />
      <Grid cellWidth="1/2">
        <Cell style={styles.link}>
          <Link to="/">Home</Link>
        </Cell>
        <Cell style={styles.link}>
          <Link to="/standings">Standings</Link>
        </Cell>
      </Grid>
      <div>{this.props.children}</div>
      </StyleRoot>

    );
  }
}


export default connect(null, { push: routeActions.push })(App);
