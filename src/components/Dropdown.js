import { useState, useEffect, useRef } from 'react';

const Dropdwon = ({ options }) => {
  const [open, setOpen] = useState(false);
  const componentRef = useRef();

  useEffect(() => {
    console.log(componentRef);
    return () => {};
  }, []);

  const toggleOpen = () => setOpen(!open);
  const onSelect = (option) => {
    setOpen(false);
  };

  const renderedOptions = options.map((option) => (
    <h5 onClick={() => onSelect(option)}>{option.label}</h5>
  ));

  return (
    <div ref={componentRef}>
      <div onClick={toggleOpen}>Select...</div>
      {open && <div>{renderedOptions}</div>}
    </div>
  );
};

export default Dropdwon;
