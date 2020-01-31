import React, {Fragment} from "react";
import PropTypes from "prop-types";

export default function MemorizTable(props) {
  return (
    <Fragment>
      <style jsx>{`
        .memo__table {
          width: ${props.sizes[0] * 72}px;
          height: ${props.sizes[1] * 80}px;
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-start;
          align-items: flex-start;
          margin-top: 20px;
          align-content: flex-start;
        }
      `}</style>
      <div className="memo__table">
        {props.children}
      </div>
    </Fragment>
  )
}

MemorizTable.propTypes = {
  sizes: PropTypes.array,
};
