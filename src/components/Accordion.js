const Accordion = ({ items }) => {
  const renderedItems = items.map(({ label, content }, i) => {
    return (
      <div key={i}>
        <h4>{label}</h4>
        <p>{content}</p>
      </div>
    );
  });

  return renderedItems;
};

export default Accordion;
