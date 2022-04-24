import React from "react";

const Notes = ({ contents }) => {
  return (
    <textarea
      name="notes"
      id="notes"
      cols="30"
      rows="10"
      placeholder={contents.placeholder}
    ></textarea>
  );
};

export default Notes;
