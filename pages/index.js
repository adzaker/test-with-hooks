import React, {useState, useEffect, Fragment} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addToList, counter, changeValue} from "../elements/Actions";
import Nav from "../components/nav";


const getTime = () => {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes().toString().length > 1 ? date.getMinutes() : `0${date.getMinutes()}`;
	const seconds = date.getSeconds().toString().length > 1 ? date.getSeconds() : `0${date.getSeconds()}`;
	return `${hours}:${minutes}:${seconds}`;
};

const Index = () => {
	const app = useSelector(state => state.app);
	const dispatch = useDispatch();
	const [date, setDate] = useState(getTime());

	useEffect(() => {
		setTimeout(checkNewTime, 1000);
	}, );

	const checkNewTime = () => {
		setDate(getTime());
	};

	const counterIncrease = () => {
		return dispatch(counter(1))
	};

	const counterDecrease = () => {
		return dispatch(counter(-1))
	};

	const counterAdd = () => {
		return dispatch(addToList())
	};

	const itemChange = (e) => {
		return dispatch(changeValue(e.target.value, e.target.dataset.index));
	};


	return (
		<Fragment>
			<Nav active={0} />
			<style jsx>{`
       	.button {
       		display: block;
       		background: rgb(
       		  ${Math.floor((Math.random() * 255))}, 
						${Math.floor((Math.random() * 255))}, 
						${Math.floor((Math.random() * 255))}
						);
					color: white;
					text-shadow: 0 1px 3px black;
					border: none;
					border-radius: 4px;
					height: 42px;
					line-height: 42px;
					padding: 0 32px;
					margin-bottom: 8px;
					cursor: pointer;
					outline: none !important;
					transition: background-color .2s ease;
				}
				
				.button:hover {
						background-color: rgb(
       		  ${Math.floor((Math.random() * 255))}, 
						${Math.floor((Math.random() * 255))}, 
						${Math.floor((Math.random() * 255))}
						);
				}
				.button:active {
					background-color: rgb(
          ${Math.floor((Math.random() * 255))}, 
					${Math.floor((Math.random() * 255))}, 
					${Math.floor((Math.random() * 255))}
					);
        }
        
        ul {
       		padding: 0;
       		margin: 0;
        }
        
        li {
        	list-style: none;
        }
        
        li input {
        	height: 24px;
        	font-size: 16px;
        	font-family: monospace;
        	border: none;
        }
      `}</style>
			<p>{date}</p>
			<button className={'button'} onClick={counterIncrease}>counterIncrease</button>
			<button className={'button'} onClick={counterDecrease}>counterDecrease</button>
			<button className={'button'} onClick={counterAdd}>counterAdd</button>
			<br/>
			<p>{app.counter}</p>
			<br/>
			<ul>{app.data.map((item, i) =>
				<li key={i}>
					<input type="text" value={item} data-index={i} onChange={itemChange}/></li>
			)}</ul>
		</Fragment>
	)
};

export default Index;
