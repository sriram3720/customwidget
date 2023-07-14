import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RangeSlider.css'; 

const RangeSlider = ({ min, max, step, onChange }) => {
  const [values, setValues] = useState([min, max]);

  const handleRangeChange = (event) => {
    const newValues = [...values];
    newValues[event.target.dataset.index] = parseInt(event.target.value);
    setValues(newValues);
    onChange(newValues);
  };

  return (
    <div className="range-slider">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={values[0]}
        data-index={0}
        onChange={handleRangeChange}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={values[1]}
        data-index={1}
        onChange={handleRangeChange}
      />
      <div>
        <span>Min: {values[0]}</span>
        <span>Max: {values[1]}</span>
      </div>
      <div className="track">
        <div
          className="thumb"
          style={{ left: `${((values[0] - min) / (max - min)) * 100}%` }}
        />
        <div
          className="thumb"
          style={{ left: `${((values[1] - min) / (max - min)) * 100}%` }}
        />
      </div>
    </div>
  );
};

RangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

RangeSlider.defaultProps = {
  step: 1,
};

export default RangeSlider;


