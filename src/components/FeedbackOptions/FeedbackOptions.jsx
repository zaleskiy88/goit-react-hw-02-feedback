import { Button } from './Buttons.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      <Button type="button" name="good" onClick={onLeaveFeedback}>
        {options.good}
      </Button>
      <Button type="button" name="neutral" onClick={onLeaveFeedback}>
        {options.neutral}
      </Button>
      <Button type="button" name="bad" onClick={onLeaveFeedback}>
        {options.bad}
      </Button>
    </div>
  );
};
