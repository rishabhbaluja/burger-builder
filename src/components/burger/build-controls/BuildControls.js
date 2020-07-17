import React from "react";
import "./BuildControls.css";
import BuildControl from "./build-control/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>
        <strong>Current Price : Rs {props.price}</strong>
      </p>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            ingredientAdded={() => props.ingredientAdded(control.type)}
            ingredientRemoved={() => props.ingredientRemoved(control.type)}
            disabled={props.disabled[control.type]}
          />
        );
      })}
      <button className="OrderButton" disabled={!props.purchasable} onClick={props.ordered}>
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
