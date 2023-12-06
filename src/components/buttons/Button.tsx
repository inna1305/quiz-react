import { ButtonProps } from 'types/types';
import React, { ReactElement } from 'react';

const Button = (props: ButtonProps): ReactElement => {
  const isActive = props.isActive;
  return (
    <button className="button" id="next" disabled={!isActive} onClick={() => props.buttonHandler()}>
      <div>{props.innerText}</div>
    </button>
  );
};

export default Button;
