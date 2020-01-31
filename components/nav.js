import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types';

const links = [
  {
    key: 1,
    href: '/',
    label: 'Index',
  },
  {
    key: 2,
    href: '/second',
    label: 'Second',
  },
  {
    key: 3,
    href: '/tictactoe',
    label: 'tictactoe',
  },
  {
    key: 4,
    href: '/piano',
    label: 'piano',
  },
  {
    key: 5,
    href: '/memoriz',
    label: 'memoriz',
  },
];
export default function Nav(props) {
  return (
    <nav>
      <ul>
        {links.map(({key, href, label}) => (
          <li key={key}>
            <Link href={href}>
              <a className={props.active === key - 1 && 'active'}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
      nav {
        text-align: center;
        z-index: 1000;
        position: relative;
      }
      ul {
        display: flex;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 16px;
        font-family: 'Arial Narrow';
      }
      
      a.active {
        font-weight: bold;
      }
    `}</style>
    </nav>
  );
}

Nav.propTypes = {
  active: PropTypes.number,
};
