
  import { React, ReactDOM } from 'https://unpkg.com/es-react';

  import htm from 'https://unpkg.com/htm?module'
  const html = htm.bind(React.createElement);

  import Navbar from './components/navbar/Navbar.js'

  const Route = {
    '/': React.lazy(() => import('./routes/home/index.js')),
    '/profile': React.lazy(() => import('./routes/profile/index.js')),
    '*': React.lazy(() => import('./routes/unknown/index.js'))
  }

  ReactDOM.render(
    html`
      <${React.Suspense} fallback=${html`<div>Loading ....</div>`}>
          <${Navbar} />
          <${Route[location.pathname] || Route['*']} />
      <//>
    `,
    document.body
  )
