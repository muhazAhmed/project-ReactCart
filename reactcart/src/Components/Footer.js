import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom" style={{
        "margin-left" : "13em"
    }}>
      <button
        className="btn btn-danger col-2"
        style={{
          "border-radius": "3em",
          padding: "1em",
          margin: "1em",
        }}
        onClick={() => {
          props.resetQuantity();
        }}
      >
        Reset
      </button>
      <div
        className="col-5 bg-dark text-white text-center"
        style={{
          padding: "1em",
          margin: "1em",
          "border-radius": "3em",
        }}
      >
        {props.totalAmount}
      </div>
      <button
        className="btn btn-primary col-2"
        style={{
          "border-radius": "3em",
          padding: "1em",
          margin: "1em",
        }}
      >
        Pay Now
      </button>
    </div>
  );
}
