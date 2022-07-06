import { Button } from '../ui/Buttons.styled';
import { capitalizeFirstLowercaseRest } from 'utils/capitalizeFirstLowercaseRest';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      <Button type="button" name="good" onClick={onLeaveFeedback}>
        {capitalizeFirstLowercaseRest(options[0])}
      </Button>
      <Button type="button" name="neutral" onClick={onLeaveFeedback}>
        {capitalizeFirstLowercaseRest(options[1])}
      </Button>
      <Button type="button" name="bad" onClick={onLeaveFeedback}>
        {capitalizeFirstLowercaseRest(options[2])}
      </Button>
    </div>
  );
};
