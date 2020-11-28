import {React} from 'https://unpkg.com/es-react';
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(React.createElement)

const Home = () => {

  return html`
      <h2> Hi there Home page </h2>
      <h3>you could go <a href="/profile">Your user profile page</a></h3>
    `;
};

export default Home;
