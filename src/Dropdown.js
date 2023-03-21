import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown({options, isMulti = false }) {
  const [selectedOption, setSelectedOption] = useState(isMulti ? [] : options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    if (isMulti) {
      if (selectedOption.includes(option)) {
        setSelectedOption(selectedOption.filter((o) => o !== option));
      } else {
        setSelectedOption([...selectedOption, option]);
      }
    } else {
      setSelectedOption(option);
      setIsOpen(false);
    }
  };

  const handleSelectAll = () => {
    setSelectedOption(options);
  };

  const handleDeselectAll = () => {
    setSelectedOption([]);
  };

  const renderHeaderTitle = () => {
    if (isMulti) {
      return selectedOption.length > 0
        ? selectedOption.map((option) => (
            <span
              key={option.value}
              className={`dropdown-selected ${isOpen ? 'highlight' : ''}`}
            >
              {option.label}
            </span>
          ))
        : <span className="dropdown-placeholder">Select an option</span>;
    } else {
      return (
        <span
          className={`dropdown-selected ${isOpen ? 'highlight' : ''}`}
        >
          {selectedOption.label}
        </span>
      );
    }
  };

  const renderListItems = () => {
    return (
      <>
        {isMulti && (
          <>
            <li
              key="select-all"
              className="dropdown-list-item"
              onClick={handleSelectAll}
            >
              <span className="dropdown-list-item-text">Select All</span>
            </li>
            <li
              key="deselect-all"
              className="dropdown-list-item"
              onClick={handleDeselectAll}
            >
              <span className="dropdown-list-item-text">Deselect All</span>
            </li>
          </>
        )}
        {options.map((option) => (
          <li
            key={option.value}
            className={`dropdown-list-item ${
              isMulti && selectedOption.includes(option)
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {isMulti ? (
              <>
                <input
                  type="checkbox"
                  checked={selectedOption.includes(option)}
                  readOnly
                />
                {option.label}
              </>
            ) : (
              <span>{option.label}</span>
            )}
          </li>
        ))}
      </>
    );
  };

  return (
    <div className={`dropdown ${isOpen ? "is-open" : ""}`}>
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="dropdown-header-title">
          {renderHeaderTitle()}
        </div>
        <div className="dropdown-header-arrow">&#9662;</div>
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          <ul className="dropdown-list">
            {renderListItems()}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
