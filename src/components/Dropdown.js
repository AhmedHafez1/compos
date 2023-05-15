import { useState } from "react";

const Dropdwon = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  const onSelect = (option) => {
    setOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => (
    <h5 onClick={() => onSelect(option)} key={option.value}>
      {option.label}
    </h5>
  ));

  let labelPlaceHolder = value?.label || "Select...";

  return (
    <div>
      <div onClick={toggleOpen}>{labelPlaceHolder}</div>
      {open && <div>{renderedOptions}</div>}
    </div>
  );
};

export default Dropdwon;
