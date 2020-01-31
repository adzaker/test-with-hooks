import React, {Fragment} from "react";
import Key from './key';
import {fullOctave, halfOctave, lettersArray, soundsArray} from "../../elements/Constants";
import PropTypes from 'prop-types';


export default function Octave(props) {
  const currentOctave = props.pitch === 1 ? fullOctave : halfOctave;

  return (
    <Fragment>
      <style jsx>{`
        .octave {
          display: flex;
        }
      `}</style>
      <div className='octave'>
        {currentOctave.map((color, index) => {
          return <Key
            color={color}
            key={props.pitch === 1 ? index : index + 12}
            makeSound={props.makeSound}
            letter={lettersArray[props.pitch === 1 ? index : index + 12]}
            sound={soundsArray[props.pitch === 1 ? index : index + 12]}
          />
        })}
      </div>
    </Fragment>
  )
}

Octave.propTypes = {
  pitch: PropTypes.number,
  makeSound: PropTypes.func,
};
