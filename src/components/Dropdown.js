import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdwon = ({ options, value, onChange }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);
  const onSelect = (option) => {
    setOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => (
    <h5
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      onClick={() => onSelect(option)}
      key={option.value}
    >
      {option.label}
    </h5>
  ));

  let labelPlaceHolder = value?.label || "Select...";

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        {labelPlaceHolder}
        <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
};

export default Dropdwon;
