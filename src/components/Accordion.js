import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map(({ label, content }, i) => {
    const isExpanded = i === expandedIndex;
    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );
    return (
      <div key={i}>
        <h4 onClick={() => setExpandedIndex(i)}>{label}</h4>
        {icon}
        <p>{isExpanded && content}</p>
      </div>
    );
  });

  return renderedItems;
};

export default Accordion;
