import { useState } from 'react';

const Dropdwon = ({ options }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  const onSelect = (option) => {
    setOpen(false);
    console.log(option.label);
  };

  const renderedOptions = options.map((option) => (
    <h5 onClick={() => onSelect(option)}>{option.label}</h5>
  ));

  return (
    <div>
      <div onClick={toggleOpen}>Select...</div>
      {open && <div>{renderedOptions}</div>}
    </div>
  );
};

export default Dropdwon;
