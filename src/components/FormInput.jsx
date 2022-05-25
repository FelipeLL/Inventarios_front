import { forwardRef } from "react";

const FormInput = forwardRef(
  ({ type, placeholder, className, onChange, onBlur, name }, ref) => {
    return (
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
      />
    );
  }
);

export default FormInput;
