import React, {Fragment} from "react";
import PropTypes from 'prop-types';

export default function Key(props) {
  if (props.color === 'white') {
    return (
      <Fragment>
        <style jsx>{`     
          .key-white {
            background-color: white;
            width: 2.25rem;
            height: 8rem;
            border: 1px solid black;
            z-index: 10;
            cursor: pointer;
            position: relative;
          }
          
          .key-white:hover {
            background-color: aliceblue;
          }
          
          .key-white:active,
          .key-white.-active {
            background: rgb(
              ${Math.floor((Math.random() * 255))}, 
              ${Math.floor((Math.random() * 255))}, 
              ${Math.floor((Math.random() * 255))}
						);
          }
        `}</style>
        <div className='key key-white' onClick={props.makeSound} data-letter={props.letter}>
          <audio>
            <source src={`/sounds/piano/${props.sound}`} />
          </audio>
        </div>
      </Fragment>
    )
  }
  return (
    <Fragment>
      <style jsx>{`         
          .key-black {
            background-color: black;
            width: 1.5rem;
            height: 5rem;
            margin-left: -.75rem;
            margin-right: -.75rem;
            z-index: 20;
            cursor: pointer;
            position: relative;
            border: 2px solid black;
            border-top-width: 1px;
            box-sizing: border-box;
          }
          
          .key-black:active,
          .key-black.-active {
            background: rgb(
              ${Math.floor((Math.random() * 255))}, 
              ${Math.floor((Math.random() * 255))}, 
              ${Math.floor((Math.random() * 255))}
						);
          }
        `}</style>
      <div className='key key-black' data-letter={props.letter} onClick={props.makeSound}>
        <audio>
          <source src={`/sounds/piano/${props.sound}`}/>
        </audio>
      </div>
    </Fragment>
  )
}

Key.propTypes = {
  makeSound: PropTypes.func,
  letter: PropTypes.string,
  sound: PropTypes.string
};
