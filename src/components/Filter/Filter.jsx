import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        placeholder="Enter name"
        value={filter}
        onChange={onChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
