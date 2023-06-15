import React, { useState } from 'react';

function HeadTail() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [values, setValues] = useState([]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedValue === null) {
      alert('Please select a value from the dropdown');
      return;
    }

    setValues((prevValues) => {
      const lastValue = prevValues[prevValues.length - 1];

      if (lastValue && lastValue.includes(selectedValue)) {
        // add the new value to the same column
        return [...prevValues.slice(0, -1), `${lastValue} ${selectedValue}`];
      }

      // add the new value to a new column
      return [...prevValues, selectedValue];
    });

    setSelectedValue(null);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        <option value={null}>Select Value</option>
        <option value="H">H</option>
        <option value="T">T</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
      <br />
      {values.map((value, index) => (
        <div key={index} style={{ display: 'inline-block', marginRight: 10 }}>
          {value.split(' ').map((char, i) => (
            <div key={i}>{char}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default HeadTail;
