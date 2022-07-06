import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { ContainerDiv } from 'components/Ui/ContainerDiv.styled';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackClickHandler = evt => {
    const { name } = evt.target;

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  //====================utils===========
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const positive = this.state.good + this.state.neutral;

    return ((100 * positive) / this.countTotalFeedback()).toFixed();
  };
  //==============================
  render() {
    const { good, neutral, bad } = this.state;
    const options = { good: 'Good', neutral: 'Neutral', bad: 'Bad' };

    return (
      <ContainerDiv>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.feedbackClickHandler}
            options={options}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
              state={this.state}
            />
          )}
        </Section>
      </ContainerDiv>
    );
  }
}
