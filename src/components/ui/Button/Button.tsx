const Button = ({
  children,
  type,
  onClick
}: {
  children: string;
  type: "submit" | "reset" | "button";
  onClick?: Function
}) => {
  return (
    <button
      className="border-slate-800 p-4 border-4 rounded-xl bg-indigo-500 hover:bg-indigo-800 transition-all font-bold"
      type={type}
      onClick={onClick ? () => onClick() : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
