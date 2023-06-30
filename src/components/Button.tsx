interface ButtonProps {
  name: string;
  clickHandler?: (buttonName: string) => void;
}

const Button = ({ name, clickHandler }: ButtonProps) => {
  const handleClick = () => {
    clickHandler?.(`${name}`);
  };

  return (
    <td className="border-red-400 border-2 h-32 w-24">
      <button className="w-full h-full text-2xl" onClick={handleClick}>
        {name}
      </button>
    </td>
  );
};

export default Button;
