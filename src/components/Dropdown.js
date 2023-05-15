import { useState } from "react";

const Dropdwon = ({ options, selectedOption, handleSelect }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  const onSelect = (option) => {
    setOpen(false);
    handleSelect(option);
  };

  const renderedOptions = options.map((option) => (
    <h5 onClick={() => onSelect(option)} key={option.value}>
      {option.label}
    </h5>
  ));

  let content = "Select...";
  if (selectedOption) {
    content = selectedOption.label;
  }

  return (
    <div>
      <div onClick={toggleOpen}>{content}</div>
      {open && <div>{renderedOptions}</div>}
    </div>
  );
};

export default Dropdwon;
