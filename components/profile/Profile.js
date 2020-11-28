import {React} from 'https://unpkg.com/es-react';
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(React.createElement)

const Profile = () => {

  return html`
      <h2> Hi there Profile page </h2>
      <h3>you could find here some useful stuff</h3>
    `;
};

export default Profile;
