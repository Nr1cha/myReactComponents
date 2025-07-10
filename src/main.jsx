import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import CssGrid from './components/grid.jsx'
import GridHeaderNav from './components/gridheader.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <CssGrid />
    <GridHeaderNav />
  </StrictMode>,
)
