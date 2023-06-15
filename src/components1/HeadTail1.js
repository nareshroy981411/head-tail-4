import React, { useState } from 'react';

function HeadTail1() {
  const [selectedValue, setSelectedValue] = useState('');
  const [headRow, setHeadRow] = useState([]);
  const [tailRow, setTailRow] = useState([]);
  const [headColumn, setHeadColumn] = useState([]);
  const [tailColumn, setTailColumn] = useState([]);

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedValue === '') {
      alert('Please select value from dropdown');
      return;
    }
    if (selectedValue === 'H') {
      if (tailRow.length > 0) {
        const newRow = [...tailRow];
        newRow.push(selectedValue);
        setTailRow(newRow);
      } else {
        const newColumn = [...headColumn];
        newColumn.push(selectedValue);
        setHeadColumn(newColumn);
      }
    } else if (selectedValue === 'T') {
      if (headRow.length > 0) {
        const newRow = [...headRow];
        newRow.push(selectedValue);
        setHeadRow(newRow);
      } else {
        const newColumn = [...tailColumn];
        newColumn.push(selectedValue);
        setTailColumn(newColumn);
      }
    }
    setSelectedValue('');
  }

  return (
    <div>
      <h1>Head & Tail</h1>
      <form onSubmit={handleSubmit}>
        <select value={selectedValue} onChange={handleDropdownChange}>
          <option value="">Select Value</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <div>
        <div style={{ display: 'inline-block', marginRight: '50px' }}>
          {headColumn.map((column, columnIndex) => (
            <div key={`headColumn${columnIndex}`}>{column}</div>
          ))}
          {headRow.map((row, rowIndex) => (
            <div key={`headRow${rowIndex}`}>{row}</div>
          ))}
        </div>
        <div style={{ display: 'inline-block' }}>
          {tailColumn.map((column, columnIndex) => (
            <div key={`tailColumn${columnIndex}`}>{column}</div>
          ))}
          {tailRow.map((row, rowIndex) => (
            <div key={`tailRow${rowIndex}`}>{row}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeadTail1;
