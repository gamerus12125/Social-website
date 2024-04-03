import { HTMLInputTypeAttribute } from "react";

const Input = ({
  type,
  id,
  name,
  required
}: {
  type: HTMLInputTypeAttribute;
  id: string;
  name: string;
  required?: boolean
}) => {
  return (
    <input
      className="border-2 border-slate-800 p-2 rounded"
      type={type}
      id={id}
      name={name}
      required={required}
    />
  );
};

export default Input;
