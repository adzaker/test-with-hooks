import React, {useState, useEffect, Fragment} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Table from "../components/tictctoe/table";
import Cell from "../components/tictctoe/cell";
import Nav from "../components/nav";
import { zero, cross } from "../elements/Constants";
// import explosion from "../public/explosion.gif";
import {changeCell} from "../elements/Actions";

const winningCases = [
	[0, 1, 2],
	[0, 4, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 4, 6],
	[2, 5, 8],
	[3, 4, 5],
	[6, 7, 8],
];

const TicTacToe = () => {
	const tic = useSelector(state => state.tic);
	const dispatch = useDispatch();

	const [explosion, setExplosion] = useState([null, null]);
	const [user, setUser] = useState(false);
	const [winner, setWinner] = useState(null);

	const clickButton = (e) => {
		e.preventDefault();
		const index = Number(e.target.dataset.index);
		let top = Math.floor(index / 3);
		let left = index - (top * 3);
		if (explosion[0] === null && !e.target.innerHTML.length) {
			toggleExplosion([left * 140 + 75,  top * 140 + 75])
			setUser(!user);
			return dispatch(changeCell(e.target.dataset.index, user))
		}
		return false;
	};

	const cleanExplosion = () => {
		setExplosion([null, null]);
	};

	const toggleExplosion = ([x, y]) => {
		setExplosion([x, y]);
		const expSound = document.querySelector('#explosion');
		expSound.play();

		setTimeout(cleanExplosion, 1300);
	};

	useEffect(() => {
		let array1 = [];
		let array2 = [];
		const hugeExpSound = document.querySelector('#huge-explosion');
		tic.tictactoe.forEach((item, index) => {
			if (item && item === cross) {
				array1.push(index);
			} else if (item && item === zero) {
				array2.push(index);
			}
		});
		winningCases.forEach((winCase) => {
			let winArray1 = [false, false, false];
			let winArray2 = [false, false, false];
			for (let i = 0; i < 3; i++) {
				winArray1[i] = array1.some((elem) => elem === winCase[i]);
				winArray2[i] = array2.some((elem) => elem === winCase[i]);
			}
			if (winArray1.every(item => item)) {
				setWinner('first player wins!');
				hugeExpSound.play();
			}

			if (winArray2.every(item => item)) {
				setWinner('second player wins!');
				hugeExpSound.play();
			}
		});
	});

	return (
		<Fragment>
			<style jsx>
				{`
					.explosion {
						position: absolute;
						z-index: 1;
						width: 240px;
						height: auto;
						transform: translate(-50%, -50%);
					
					}	
				`}
			</style>
			<Nav active={2} />
			{winner && <h1>{winner}</h1>}
			<p>{!winner && user ? 'Second user' : 'First user'}</p>
			<Table>
				{explosion[0] !== null && <img className="explosion" style={{top: `${explosion[1]}px`, left: `${explosion[0]}px`}} alt='bdish' src="/explosion.gif" />}
				{
					!winner && tic.tictactoe.map((cell, index) => {
						// console.log(cell);
						return <Cell
							key={`cellKey-${index}`}
							index={index}
							clickButton = {clickButton}
							buttonValue = {cell}
						/>
					})
				}
			</Table>
			<audio id="explosion" src="/sounds/explosion.mp3" />
			<audio id="huge-explosion" src="/sounds/huge-explosion.mp3" />
		</Fragment>
	)
};

export default TicTacToe;
