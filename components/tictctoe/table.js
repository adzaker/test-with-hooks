import React, {Fragment} from "react";

export default (props) => {
  return (
    <Fragment>
      <style jsx>{`
				.ticTac__table {
					width: 420px;
					height: 420px;
					display: flex;
					justify-content: flex-start;
					align-items: flex-start;
					flex-flow: row wrap;
					position: relative;
				}
			`}</style>
      <div className="ticTac__table">
        {props.children}
      </div>
    </Fragment>
  )
}
