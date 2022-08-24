const TextField = ({
  value,
  type,
  name,
  placeholder,
  required,
  autoFocus,
  className,
  autoComplete,
  onChange,
}) => {
  return (
    <input
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      className={className}
      onChange={onChange}
    />
  );
};

export default TextField;
