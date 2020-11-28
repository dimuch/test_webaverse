import { React } from 'https://unpkg.com/es-react';
import htm from 'https://unpkg.com/htm?module'
const html = htm.bind(React.createElement)

const Navbar = () => {
  return html`
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/profile'>Profile</a>
        </li>
      </ul>
    `;
};

export default Navbar;
