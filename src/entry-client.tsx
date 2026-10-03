import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App'

document.documentElement.classList.add('js')

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Root element #root not found')

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// En production, le HTML est pré-rendu : on hydrate. En dev (vite), on monte.
if (rootEl.hasChildNodes()) hydrateRoot(rootEl, app)
else createRoot(rootEl).render(app)
