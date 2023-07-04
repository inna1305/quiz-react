import { ButtonValue, PrevButtonProps } from "types/types";
import React, { ReactElement } from "react";

const PrevButton = (props: PrevButtonProps): ReactElement => {
  let isInactive = true;
  if (props.currentStep > 1) {
    isInactive = false;
  }

  return (<button className="button" id="prev" disabled={isInactive} onClick={props.buttonHandler}>
    <div>{ButtonValue.prev}</div>
  </button>);
}

export default PrevButton;
