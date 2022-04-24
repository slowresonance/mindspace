import React from "react";

const List = ({ contents }) => {
  return contents.map((thing) => (
    <div className="thing">
      <div className="title">
        {thing.link ? <a href={`${thing.link}`}>{thing.title}</a> : thing.title}
      </div>
      {thing.subtitle ? (
        <div className="subtitle">{thing.subtitle}</div>
      ) : (
        <></>
      )}
    </div>
  ));
};

export default List;
