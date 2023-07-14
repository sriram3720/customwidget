import React from 'react';
import RangeSlider from './RangeSlider';

const App = () => {
  const handleRangeChange = (values) => {
    // Handle the range values
    console.log('Selected values:', values);
  };

  return (
    <div>
      <h1>Custom Range Slider Widget</h1>
      <RangeSlider min={0} max={100} onChange={handleRangeChange} />
    </div>
  );
};

export default App;


