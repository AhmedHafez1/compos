import { useState } from 'react';

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map(({ label, content }, i) => {
    return (
      <div key={i}>
        <h4>{label}</h4>
        <p>{i === expandedIndex && content}</p>
      </div>
    );
  });

  return renderedItems;
};

export default Accordion;
