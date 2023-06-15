import React, { useState } from "react";

const options = [
  { value: "H", label: "Heads" },
  { value: "T", label: "Tails" },
];

const Demo = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
  const [errowrMessage, setErrowrMessage] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState({ col: null, row: null });

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedOption === "") {
      setErrowrMessage("Please select an option.");
      return;
    }

    if (
      selectedValues.length > 0 &&
      selectedValues[selectedValues.length - 1].indexOf(selectedOption) !== -1
    ) {
      selectedValues[selectedValues.length - 1].push(selectedOption);
      setSelectedValues([...selectedValues]);
    } else {
      setSelectedValues([...selectedValues, [selectedOption]]);
    }

    setSelectedOption("");
    setErrowrMessage('')
  };

  const deleteItem = (col, row) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[col].splice(row, 1);
    if (newSelectedValues[col].length === 0) {
      newSelectedValues.splice(col, 1);
    }
    setSelectedValues(newSelectedValues);
  };

  const getIndex = (col, row) => {
    setHoveredIndex({ col, row });
  };

  return (
    <div>
      <h1>Head-Tail Game</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="selectOption">Select an option:</label>
            <select
              id="selectOption"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="">--Please choose an option--</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button 
            className="btn btn-info"
            type="submit" 
            onClick={handleSubmit}>
              Submit
            </button>
          {errowrMessage && <p>{errowrMessage}</p>}
        </form>
        <div>
          {selectedValues.map((col, colIndex) => (
            <div key={colIndex} className="col">
              {col.map((value, rowIndex) => (
                <a
                  key={rowIndex}
                  className="item"
                  onMouseEnter={() => getIndex(colIndex, rowIndex)}
                  onMouseLeave={() => setHoveredIndex({ col: null, row: null })}
                  onClick={() => deleteItem(colIndex, rowIndex)}
                >
                  {value}{" "}
                  {hoveredIndex.col === colIndex &&
                    hoveredIndex.row === rowIndex && (
                      <span className="tooltip">
                        Col: {colIndex}, row: {rowIndex}
                      </span>
                    )}
                </a>
              ))}
            </div>
          ))}
        </div>
    </div>
  );
};

export default Demo;
