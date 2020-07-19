import React from "react";

const SearchBox = ({ searchChange, searchBox }) => {
  return (
    <div>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
