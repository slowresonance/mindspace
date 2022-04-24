import React from "react";
import List from "./List";
import Todos from "./Todos";
import Notes from "./Notes";

const Block = ({ title, type, subtitle, collapsible, contents }) => {
  const typeRouter = () => {
    switch (type) {
      case "list":
        return <List contents={contents} />;
      case "todos":
        return <Todos contents={contents} />;
      case "notes":
        return <Notes contents={contents} />;
      default:
        return <List contents={contents} />;
    }
  };

  return (
    <div className={`block ${collapsible ? "collapsible" : ""}`}>
      <div className="header">
        <div className="title">
          {collapsible ? (
            <svg
              width="11"
              height="9"
              viewBox="0 0 11 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 9L-6.67246e-07 1.67691e-06L11 7.15256e-07L5.5 9Z"
                fill="#EEEEEE"
              />
            </svg>
          ) : (
            <></>
          )}{" "}
          {title}
        </div>
        {subtitle ? <div className="subtitle">{subtitle}</div> : <></>}
      </div>
      <div className="main">{typeRouter()}</div>
    </div>
  );
};

export default Block;
