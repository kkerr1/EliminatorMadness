import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { fetchDates } from 'actions/dates';
class Home extends Component {
  static propTypes = {
    fetchDates: PropTypes.func,
    dates: PropTypes.array,
    currentDate: PropTypes.object
  };
  componentWillMount() {
    this.props.fetchDates();
  }
  render() {

    const {dates, currentDate} = this.props;

    const datesDisplay = dates.map((date, key) => {
      return <div key={key}>{date.date}</div>;
    });
    return (
      <div>
      <h1>{currentDate.date}</h1>
      {datesDisplay}
      </div>
    );
  }
}
const mapStateToProps = (state) => state.dates;

export default connect(mapStateToProps, { fetchDates })(Home);
