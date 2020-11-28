import {React} from 'https://unpkg.com/es-react';
import htm from 'https://unpkg.com/htm?module'

import Profile from '../../components/profile/Profile.js'

const html = htm.bind(React.createElement);


export default () => html`
  <div className="app-wrapper">
    <header>
      <${Profile} />
    </header>
  </div>
`
