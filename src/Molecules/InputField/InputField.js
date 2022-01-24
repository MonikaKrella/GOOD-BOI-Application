import propTypes from 'prop-types';
import InputLabel from '../../Atoms/InputLabel/InputLabel';
import InputFieldStyled from './InputFieldStyled';

const InputField = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  htmlFor,
  labelText,
  name,
  required,
}) => {
  return (
    <>
      <InputLabel htmlFor={htmlFor} labelText={labelText} />
      <InputFieldStyled
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      />
    </>
  );
};

InputField.propTypes = {
  htmlFor: propTypes.string.isRequired,
  labelText: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  required: propTypes.bool,
};

export default InputField;
