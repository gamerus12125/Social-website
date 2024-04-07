import { HTMLInputTypeAttribute } from "react";

const Input = ({
  type,
  id,
  name,
  required,
  placeholder,
  onChange
}: {
  type: HTMLInputTypeAttribute;
  id: string;
  name: string;
  required?: boolean;
  placeholder?:string;
  onChange?: Function
}) => {
  return (
    <input
      className="border-2 border-slate-800 p-2 rounded"
      type={type}
      id={id}
      name={name}
      required={required}
      placeholder={placeholder}
      onChange={(e) => onChange ? onChange(e.target.value) : ""}
    />
  );
};

export default Input;
