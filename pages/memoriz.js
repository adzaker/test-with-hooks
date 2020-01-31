import React, {Fragment, useEffect, useState} from 'react'
import Nav from "../components/nav";
import MemorizTable from "../components/memoriz/table";
import ControlPanel from "../components/memoriz/controlPanel";
import MemorizCell from "../components/memoriz/cell";
import {useDispatch, useSelector} from "react-redux";
import {setActiveCell, setMemoCount, setUnicImagesArr} from '../elements/Actions';
import * as unitsImages from '../public/memorizImages/units/index';

const array = [];
for (let i = 0; i < 36; i++) {
  array.push(i);
}

const MemorizGame = () => {
  const memoState = useSelector(state => state.memoriz);
  const dispatch = useDispatch();

  const [win, setWin] = useState(!memoState.showGame);

  useEffect(() => {
    const cells = document.querySelectorAll('.memo__cell').length;
    const fixesCells = document.querySelectorAll('.memo__cell.-fixed').length;
    if (cells && fixesCells && cells === fixesCells) {
      setTimeout(() => {
        setWin(true);
      }, 500);
    }
  });

  const itemKeys = [];

  const changeCellCount = (e) => {
    const {side} = e.target.dataset;
    const {value} = e.target;
    dispatch(setMemoCount(side, value));
    generateNewTable();
  };

  const generateNewTable = () => {
    setWin(false);
    const unicImagesCount = Math.floor(memoState.cellCount.N * memoState.cellCount.M * .5) <= 162
      ? Math.floor(memoState.cellCount.N * memoState.cellCount.M * .5)
      : 162;
    const unitImagesKeys = Object.keys(unitsImages);
    const unicImagesArr = [];
    const unicKeysArr = [];

    const getRandomImage = (rNum) => {
      if (unicKeysArr.every((key) => (key !== unitImagesKeys[rNum]))) {
        unicKeysArr.push(unitImagesKeys[rNum]);
        unicImagesArr.push(unitsImages[unitImagesKeys[rNum]]);
      } else {
        getRandomImage(Math.floor(Math.random() * unitImagesKeys.length));
      }
    };

    for (let i = 0; i < unicImagesCount; i++) {
      const randomKeyNum = Math.floor(Math.random() * unitImagesKeys.length);
      if (unicKeysArr.length) {
        getRandomImage(randomKeyNum);
      } else {
        unicKeysArr.push(unitImagesKeys[randomKeyNum]);
        unicImagesArr.push(unitsImages[unitImagesKeys[randomKeyNum]]);
      }
    }
    dispatch(setUnicImagesArr(unicImagesArr));
  };

  const clickOnCell = (e) => {
    console.log(e.currentTarget.dataset.key);
    if (e.currentTarget.classList.contains('-active') || e.currentTarget.classList.contains('-fixed')) {
      return dispatch(setActiveCell(null));
    }
    return dispatch(setActiveCell(e.currentTarget.dataset.key));
  };

  return (
    <Fragment>
      <Nav active={4}/>
      {!win ? <Fragment>
          <ControlPanel cellCount={memoState.cellCount} changeCellCount={changeCellCount}
                        generateNewTable={generateNewTable}/>
          <MemorizTable sizes={[memoState.cellCount.N, memoState.cellCount.M]}>
            {memoState.cells.map((item) => {
              let key;
              if (itemKeys.some((k) => (k === item.key))) {
                key = item.key + '.';
              } else {
                key = item.key;
                itemKeys.push(key);
              }

              return <MemorizCell
                key={key}
                innerKey={key}
                image={item.url}
                clickOnCell={clickOnCell}
                currentActiveNum={memoState.currentActiveNum}
                openedCellsNum={memoState.openedCellsNum}
              />
            })}
          </MemorizTable>
        </Fragment>
        : <div><h2>Congrats!</h2>
          <img src="/memorizImages/win.png" alt=""/>
          <div>
            <button onClick={generateNewTable}>New game</button>
          </div>
        </div>}
    </Fragment>
  )
};

export default MemorizGame;
