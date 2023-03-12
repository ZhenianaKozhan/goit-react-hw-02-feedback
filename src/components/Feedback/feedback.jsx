import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodBtnClick = e => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  onNeutralBtnClick = e => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  onBadBtnClick = e => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      Math.round((this.state.good * 100) / this.countTotalFeedback()) + '%'
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.onGoodBtnClick}>
          Good
        </button>
        <button type="button" onClick={this.onNeutralBtnClick}>
          Neutral
        </button>
        <button type="button" onClick={this.onBadBtnClick}>
          Bad
        </button>
        <ul>
          <h3>Statistic</h3>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}</li>
        </ul>
      </>
    );
  }
}

export default Feedback;
