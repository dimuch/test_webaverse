import {React} from 'https://unpkg.com/es-react';
import htm from 'https://unpkg.com/htm?module'

import Page404 from '../../components/unknown/Page404.js'

const html = htm.bind(React.createElement);


export default () => html`
  <div className="app-wrapper">
    <header>
      <${Page404} />
    </header>
  </div>
`
