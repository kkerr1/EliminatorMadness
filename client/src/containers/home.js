import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { fetchDates } from 'actions/dates';
class Home extends Component {
  static propTypes = {
    fetchDates: PropTypes.func,
    dates: PropTypes.object
  };
  componentWillMount() {
    this.props.fetchDates();
  }
  render() {

    const {dates} = this.props;

    const datesDisplay = dates.payload.map((date, key) => {
      return <div key={key}>{date.date}</div>;
    });
    return (
      <div>
      Welcome Home
      {datesDisplay}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {dates: state.dates};
};
export default connect(mapStateToProps, { fetchDates })(Home);
