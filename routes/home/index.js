import {React} from 'https://unpkg.com/es-react';
import htm from 'https://unpkg.com/htm?module'

import Home from '../../components/home/Home.js'

const html = htm.bind(React.createElement);


export default () => html`
  <div className="app-wrapper">
    <header>
      <${Home} />
    </header>
  </div>
`
