import Button from "./Button";

const Pad = () => {
  const handleClick = (buttonName: string) => {
    console.log(buttonName);
  };

  return (
    <table>
      <tbody>
        <tr>
          <Button name="AC" clickHandler={handleClick} />
          <Button name="+/&minus;" clickHandler={handleClick} />
          <Button name="%" clickHandler={handleClick} />
          <Button name="&divide;" clickHandler={handleClick} />
        </tr>
        <tr>
          <Button name="7" clickHandler={handleClick} />
          <Button name="8" clickHandler={handleClick} />
          <Button name="9" clickHandler={handleClick} />
          <Button name="&times;" clickHandler={handleClick} />
        </tr>
        <tr>
          <Button name="4" clickHandler={handleClick} />
          <Button name="5" clickHandler={handleClick} />
          <Button name="6" clickHandler={handleClick} />
          <Button name="&minus;" clickHandler={handleClick} />
        </tr>
        <tr>
          <Button name="1" clickHandler={handleClick} />
          <Button name="2" clickHandler={handleClick} />
          <Button name="3" clickHandler={handleClick} />
          <Button name="+" clickHandler={handleClick} />
        </tr>
        <tr>
          <Button name="0" clickHandler={handleClick} />
          <Button name="." clickHandler={handleClick} />
          <Button name="=" clickHandler={handleClick} />
        </tr>
      </tbody>
    </table>
  );
};

export default Pad;
