import React, { useState } from "react";

const Roy1 = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [hoverIndex, setHoverIndex] = useState({ row: null, col: null });

  const options = [
    { value: "H", label: "Heads" },
    { value: "T", label: "Tails" },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setErrorMessage("");
  };

  const handleSubmit = () => {
    if (!selectedValue) {
      setErrorMessage("Please select an option.");
      return;
    }

    const lastItem = selectedValues[selectedValues.length - 1];

    if (lastItem && lastItem[selectedValue]) {
      const updatedLastItem = { ...lastItem, [selectedValue]: lastItem[selectedValue] + 1 };
      setSelectedValues([...selectedValues.slice(0, -1), updatedLastItem]);
    } else {
      setSelectedValues([...selectedValues, { [selectedValue]: 1 }]);
    }

    setSelectedValue("");
  };

  const deleteItem = (row) => {
    const updatedSelectedValues = selectedValues.filter((item, index) => index !== row);
    setSelectedValues(updatedSelectedValues);
  };

  const handleMouseOver = (row, col) => {
    setHoverIndex({ row, col });
  };

  const handleMouseOut = () => {
    setHoverIndex({ row: null, col: null });
  };

  return (
    <div>
      <h1>Head-Tail Game</h1>
      <p>Select either "H" or "T" and click "Submit" to add to the list.</p>
      <div>
        <select value={selectedValue} onChange={handleChange}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>Submit</button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Heads</th>
            <th>Tails</th>
          </tr>
        </thead>
        <tbody>
          {selectedValues.map((item, rowIndex) => (
            <tr key={rowIndex}>
              <td>{rowIndex + 1}</td>
              <td
                onMouseOver={() => handleMouseOver(rowIndex, "H")}
                onMouseOut={handleMouseOut}
                onClick={() => deleteItem(rowIndex)}
              >
                {item.H || 0}
              </td>
              <td
                onMouseOver={() => handleMouseOver(rowIndex, "T")}
                onMouseOut={handleMouseOut}
                onClick={() => deleteItem(rowIndex)}
              >
                {item.T || 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {hoverIndex.row !== null && (
        <p>
          Hovering over row {hoverIndex.row + 1}, column {hoverIndex.col}.
        </p>
      )}
    </div>
  );
};

export default Roy1;
