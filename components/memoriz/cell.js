import React, {Fragment} from "react";
import PropTypes from "prop-types";

export default function MemorizCell(props) {
  return (
    <Fragment>
      <style jsx>
        {`
          .memo__cell {
            width: 72px;
            height: 80px;
            border: 1px solid #732d23;
            perspective: 500px;
            perspective-origin: 10% 10%;
            box-sizing: border-box;
            overflow: hidden;
            background-color: #732d23;
            cursor: pointer;
          }
          
          .memo__cellContainer {
            transform: rotateY(0deg);
            position: relative;
            transform-style: preserve-3d;
            width: 100%;
            height: 100%;
            transition: transform .3s ease;
          }
          
          .memo__cellContainer::after {
            content: '';
            background: url('/memorizImages/default.png');
            background-size: cover;
            position: absolute;
            width: 100%;
            height: 100%;
            display: block;
            transform: rotateY(0deg);
            top: 0;
            left: 0;
            backface-visibility: hidden;
            z-index: 10;
          }
          
          .memo__cell:hover .memo__cellContainer {
            transform: scale(1.05);
            z-index: 100;
          }
          
          .memo__cell.-active,
          .memo__cell.-fixed {
            cursor: default;
          }
          
          .memo__cell.-active .memo__cellContainer,
          .memo__cell.-fixed .memo__cellContainer {
            transform: rotateY(180deg);
          }
          
          img {
            width: 100%;
            height: 100%;
            z-index: 10;
            backface-visibility: hidden;
            transform: rotateY(180deg);
          }
        `}
      </style>
      <div className={
        `memo__cell 
        ${String(props.innerKey) === String(props.currentActiveNum) ? '-active' : ''}
        ${props.openedCellsNum.some((num) => (Number(num) === Number(props.innerKey))) ? '-fixed' : ''}
        `}  data-key={props.innerKey} onClick={props.clickOnCell}>
        <div className="memo__cellContainer">
          <img src={props.image} alt={props.innerKey}/>
        </div>
      </div>
    </Fragment>
  )
}

MemorizCell.propTypes = {
  innerKey: PropTypes.string,
  currentActiveNum: PropTypes.string,
  openedCellsNum: PropTypes.array,
  clickOnCell: PropTypes.func,
  image: PropTypes.string,
};

