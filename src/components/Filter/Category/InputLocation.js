import React from "react";

const InputLocation = ({ name, setID, selected, locations }) => {
  return (
    <div className="input-group mb-3">
      <select
        value={selected}
        onChange={(e) => setID(e.target.value)}
        className="form-select"
        id={name}
      >
        {locations?.map((location) => {
          return (
            <option value={location.id}>
              {location.name}-{location.id}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputLocation;
