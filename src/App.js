import Dropdwon from "./components/Dropdown";
import { useState } from "react";

function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  const handleSlectedColor = (color) => {
    setSelectedColor(color);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];
  return (
    <div>
      <Dropdwon
        options={options}
        handleSelect={handleSlectedColor}
        selectedOption={selectedColor}
      ></Dropdwon>
    </div>
  );
}

export default App;
