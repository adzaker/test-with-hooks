import React, {Fragment} from 'react'
import Nav from "../components/nav";
import Keyboard from "../components/piano/keyboard";
import Octave from "../components/piano/octave";
import { lettersArray } from "../elements/Constants";


const Piano = () => {
	const makeSound = (e) => {
		const audio = e.target.querySelector('audio');
		audio.play();
	};

	const keyDown = (e) => {
		console.log(e);
		e.preventDefault();
		const keys = document.querySelectorAll('.key');
		lettersArray.forEach((letter, index) => {
			if (e.key === letter) {
				keys[index].click();
				keys[index].classList.add('-active');
			}
		});
	};

	const keyUp = (e) => {
		e.preventDefault();
		const keys = document.querySelectorAll('.key');
		lettersArray.forEach((letter, index) => {
			if (e.key === letter) {
				keys[index].classList.remove('-active');
			}
		});
	};

	return (
		<Fragment>
			<Nav active={3} />
			<Keyboard keyDown={keyDown} keyUp={keyUp}>
				<Octave pitch={1} makeSound={makeSound} />
				<Octave pitch={2} makeSound={makeSound} />
			</Keyboard>
		</Fragment>
	)
};

export default Piano;
