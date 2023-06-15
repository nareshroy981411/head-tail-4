import React, { useState } from 'react';

const Roy = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValues, setSelectedValues] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [hoverRow, setHoverRow] = useState(null);
  const [hoverCol, setHoverCol] = useState(null);

  const options = [
    { label: 'Heads', value: 'H' },
    { label: 'Tails', value: 'T' },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedValue === '') {
      setErrorMessage('Please select an option');
      return;
    }

    const lastIndex = selectedValues.length - 1;

    if (selectedValues[lastIndex] && selectedValues[lastIndex].includes(selectedValue)) {
      setSelectedValues((prevState) => [
        ...prevState.slice(0, lastIndex),
        [...prevState[lastIndex], selectedValue],
      ]);
    } else {
      setSelectedValues((prevState) => [...prevState, [selectedValue]]);
    }

    setSelectedValue('');
    setErrorMessage('');
  };

  const deleteItem = (row, col) => {
    setSelectedValues((prevState) => {
      const newState = [...prevState];
      newState[row].splice(col, 1);
      if (newState[row].length === 0) {
        newState.splice(row, 1);
      }
      return newState;
    });
  };

  const getIndex = (row, col) => {
    setHoverRow(row);
    setHoverCol(col);
  };

  return (
    <div>
      <h1>Head Tail Game</h1>
      <div>
        <select value={selectedValue} onChange={handleChange}>
          <option value="">--Select an option--</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>Submit</button>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <div>
        {selectedValues.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((col, colIndex) => (
              <a
                key={`${rowIndex}-${colIndex}`}
                href="#"
                onMouseEnter={() => getIndex(rowIndex, colIndex)}
                onClick={() => deleteItem(rowIndex, colIndex)}
              >
                <div>{col}</div>
              </a>
            ))}
          </div>
        ))}
        {hoverRow !== null && hoverCol !== null && (
          <p>
            Hovering over item in row {hoverRow + 1}, column {hoverCol + 1}
          </p>
        )}
      </div>
    </div>
  );
};

export default Roy;
