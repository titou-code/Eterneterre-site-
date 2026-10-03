import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
/* eslint-disable react-refresh/only-export-components -- point d'entrée SSR, pas un composant */
import App from './App'

export { getSeo, PRERENDER_ROUTES } from './lib/seo'

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
