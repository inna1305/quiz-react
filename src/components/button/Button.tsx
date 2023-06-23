import React from "react";
import { ReactElement } from "react";
import { ButtonProps } from "types/types";

const Button = (props: ButtonProps): ReactElement => {
  return (<button className="button" id={props.type} disabled={!props.isThereCurrentValue} onClick={props.buttonHandler}>
    <div>{props.type}</div>
  </button>);
}

export default Button;
