
import {Input, ContainerItems } from './style'


const Inputs = ({
  value,
  onChange,
  placeholder,
  type = "text",
  label,
  htmlFor,
  icon,
}) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <ContainerItems>
        <span>{icon}</span>
        <Input
          type={type}
          name={htmlFor}
          id={htmlFor}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </ContainerItems>
    </div>
  );
};

export default Inputs;
