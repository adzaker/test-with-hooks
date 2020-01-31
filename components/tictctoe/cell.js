import React, {Fragment} from "react";

export default (props) => {
  return (
    <Fragment>
      <style jsx>{`
				.ticTac__cell {
					flex: 1 0 33%;
					height: 33.333%;
					font-size: 40px;
				}
			`}</style>
      <button className="ticTac__cell" data-index={props.index}
              onClick={(e) => {
                props.clickButton(e);
              }}>{props.buttonValue}</button>
    </Fragment>
  )
}
