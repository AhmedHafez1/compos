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
        <h4
          className="flex justify-between border-b bg-gray-50 p-3 items-center cursor-pointer"
          onClick={() => setExpandedIndex(i)}
        >
          {label}
          {icon}
        </h4>

        {isExpanded && <div className="border-b p-5">{content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
