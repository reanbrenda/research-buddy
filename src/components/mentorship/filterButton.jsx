import React from "react";

function Button({ button, filter }) {
  return (
    <div className="buttons">
      {button.map((cat, i) => {
        return (
          <button
            type="button"
            onClick={() => filter(cat)}
            className="btn btn-filterBtn"
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
