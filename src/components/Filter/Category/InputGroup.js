import React from "react";
const InputGroup = ({ name, setID, selected, episodes }) => {
    return (
      <div className="input-group mb-3">
        <select
          value={selected}
          onChange={(e) => setID(e.target.value)}
          className="form-select"
          id={name}
        >
          {episodes?.map((episode) => {
            return (
              <option value={episode.id}>
                {episode.name}-{episode.id}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

export default InputGroup;