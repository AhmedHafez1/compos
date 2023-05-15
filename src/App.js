import Dropdwon from './components/Dropdown';

function App() {
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];
  return (
    <div>
      <Dropdwon options={options}></Dropdwon>
    </div>
  );
}

export default App;
