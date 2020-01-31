import React, {Fragment} from 'react';
import PropTypes from "prop-types";

export default function ControlPanel(props) {
  return (
    <Fragment>
      <div>Choose size (N ✖ M)</div>
      <div className='controlPanel'>
        <input type="text" value={props.cellCount.N} data-side="N" onChange={props.changeCellCount}/>
        <span>✖</span>
        <input type="text" value={props.cellCount.M} data-side="M" onChange={props.changeCellCount}/>
        <button id="regenerate" onClick={props.generateNewTable}>Загенерить</button>
      </div>
    </Fragment>
  )
}

ControlPanel.propTypes = {
  cellCount: PropTypes.object,
  changeCellCount: PropTypes.func,
  generateNewTable: PropTypes.func,
};
