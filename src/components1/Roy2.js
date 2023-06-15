import React, { useState } from "react";

const Roy2 = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValues, setSelectedValues] = useState({ heads: [], tails: [] });
  const [errorMessage, setErrorMessage] = useState("");
  const [hoveredItem, setHoveredItem] = useState({ row: null, col: null });

  const options = [
    { value: "H", label: "Heads" },
    { value: "T", label: "Tails" },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    if (!selectedValue) {
      setErrorMessage("Please select an option");
      return;
    }

    const lastItem = selectedValues[selectedValue === "H" ? "heads" : "tails"][selectedValues[selectedValue === "H" ? "heads" : "tails"].length - 1];
    if (lastItem && lastItem.value === selectedValue) {
      lastItem.count++;
      setSelectedValues({...selectedValues});
    } else {
      setSelectedValues({...selectedValues, [selectedValue === "H" ? "heads" : "tails"]: [...selectedValues[selectedValue === "H" ? "heads" : "tails"], { value: selectedValue, count: 1 }]});
    }

    setSelectedValue("");
    setErrorMessage("");
  };

  const deleteItem = (item, itemType) => {
    const index = selectedValues[itemType].indexOf(item);
    const newItems = [...selectedValues[itemType]];
    newItems.splice(index, 1);
    setSelectedValues({...selectedValues, [itemType]: newItems});
  };

  const handleHover = (row, col) => {
    setHoveredItem({ row, col });
  };

  const renderItems = (items, itemType) => {
    return items.map((item, rowIndex) => (
      <div key={rowIndex} style={{ display: "flex" }}>
        <div style={{ minWidth: "100px" }}>
          <a
            href="#"
            onMouseEnter={() => handleHover(rowIndex, 0)}
            onMouseLeave={() => handleHover(null, null)}
            onClick={() => deleteItem(item, itemType)}
          >
            {item.value} ({item.count})
          </a>
        </div>
        {Array.from({ length: item.count }, (_, colIndex) => (
          <div key={colIndex} style={{ minWidth: "100px" }}>
            <a
              href="#"
              onMouseEnter={() => handleHover(rowIndex, colIndex + 1)}
              onMouseLeave={() => handleHover(null, null)}
              onClick={() => deleteItem(item, itemType)}
            >
              {item.value}
            </a>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div>
      <h1>Head Tail Game</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
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
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "50px"
        }}>
        <h2>Heads</h2>
        {renderItems(selectedValues.heads, "heads")}
        </div>
        <div>
        <h2>Tails</h2>
        {renderItems(selectedValues.tails, "tails")}
        </div>
        </div>
        {hoveredItem.row !== null && hoveredItem.col !== null && (
        <p>
        Deleting {hoveredItem.col === 0 ? selectedValues[hoveredItem.row === "Heads" ? "heads" : "tails"][hoveredItem.row].value : "a " + selectedValues[hoveredItem.row === "Heads" ? "heads" : "tails"][hoveredItem.row].value} from {hoveredItem.row}
        </p>
        )}
        </div>
        );
        };
        
        export default Roy2
