import React from "react";
import Shake from 'react-reveal/Shake';

const TextError = (props) => {
  return (
    <>
      <Shake>
        <div className="error">
          <span>
            <i className="fas fa-exclamation-triangle"></i>
          </span>
          {props.children}
        </div>
      </Shake>
    </>
  );
};

export default TextError;
