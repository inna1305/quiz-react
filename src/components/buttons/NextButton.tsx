import { ButtonValue, NextButtonProps, PrevButtonProps } from "types/types";
import React, { ReactElement } from "react";

const NextButton = (props: NextButtonProps): ReactElement => {
  let isInactive = false;
//const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
  return (<button className="button" id="next" disabled={isInactive} onClick={() =>
    props.buttonHandler([''])}>
    <div>{ButtonValue.next}</div>
  </button>);
}

export default NextButton;
