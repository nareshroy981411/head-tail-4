import React, { useState } from 'react';

const Tail = () => {
  const options = [
    { value: "", label: "Select a value" },
    { value: "H", label: "Heads" },
    { value: "T", label: "Tails" },
  ];

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [hover, setHover] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      setError("Please select an option.");
    } else {
      setData([...data, value]);
      setValue("");
      setError("");
    }
  };

  const deleteItem = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const getIndex = (index) => {
    setHover(index);
  };

  return (
    <div>
      <h1>Head or Tail Game</h1>
      <form onSubmit={handleSubmit}>
        <select value={value} onChange={handleChange}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="flex-column flex-wrap">
        {data.map((item, index) => (
          <div
            key={index}
            className={`item rounded ${hover === index ? "tooltip" : ""}`}
            onClick={() => deleteItem(index)}
            onMouseEnter={() => getIndex(index)}
            onMouseLeave={() => setHover(null)}
          >
            {item}
            {hover === index && <span className="tooltiptext">{index}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tail;
