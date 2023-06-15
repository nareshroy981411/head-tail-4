import React, { useState } from "react";

const options = [
  { value: "H", label: "Heads" },
  { value: "T", label: "Tails" },
];

const HeadTail = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState({ row: null, col: null });

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedOption === "") {
      setErrorMessage("Please select an option.");
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
    setErrorMessage('');
  };

  const deleteItem = (row, col) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[row].splice(col, 1);
    if (newSelectedValues[row].length === 0) {
      newSelectedValues.splice(row, 1);
    }
    setSelectedValues(newSelectedValues);
  };

  const getIndex = (row, col) => {
    setHoveredIndex({ row: row + 1, col: col + 1 });
  };

  return (
    <div className="bg-warming-subtle">
      <h1>Head-Tail Game</h1>
      <hr />
      <div className="container p-3">
        <form onSubmit={handleSubmit}>
          <div className=" gap-2 d-md-flex justify-content-center">
            <label htmlFor="selectOption">
              <h5>Select an option:</h5>
            </label>
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
            <button className="btn btn-primary btn-sm" type="submit">
              Submit
            </button>
          </div>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </form>
        <div className=" justify-content-center ">
          {selectedValues.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((value, colIndex) => (
                <a
                  key={colIndex}
                  className="item"
                  onMouseEnter={() => getIndex(rowIndex, colIndex)}
                  onMouseLeave={() => setHoveredIndex({ row: null, col: null })}
                  onClick={() => deleteItem(rowIndex, colIndex)}
                >
                  {value}{" "}
                  {hoveredIndex.row === rowIndex &&
                    hoveredIndex.col === colIndex && (
                      <span className="tooltip">
                       Col: {colIndex}, Row: {rowIndex}
                      </span>
                    )}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadTail;
