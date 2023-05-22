import Dropdwon from '../components/Dropdown';
import { useState } from 'react';

function DropdownPage() {
  const [selectedColor, setSelectedColor] = useState(null);
  const handleSlectedColor = (color) => {
    setSelectedColor(color);
  };
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];
  return (
    <div>
      <Dropdwon
        options={options}
        onChange={handleSlectedColor}
        value={selectedColor}
      ></Dropdwon>
    </div>
  );
}

export default DropdownPage;
