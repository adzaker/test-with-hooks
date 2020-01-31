import React, { Fragment } from "react";
import PropTypes from 'prop-types';

export default function Keyboard (props) {
  return (
    <Fragment>
      <style jsx>{`
        .keyboard {
          display: inline-flex;
          border: 1px solid black;
        }
        
        input {
          position: fixed;
          left: 0;
          opacity: 0;
          top: 0;
          width: 100%;
          height: 100%;
          cursor: default;
          z-index: 5;
        }
      `}</style>
      <div className='keyboard'>
        <input type='text' autoFocus onKeyDown={props.keyDown} onKeyUp={props.keyUp}/>
        {props.children}
      </div>
    </Fragment>
  )
}

Keyboard.propTypes = {
  keyDown: PropTypes.func,
  keyUp: PropTypes.func,
};
