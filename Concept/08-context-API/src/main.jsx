import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './ThemeContext'
import Content from './Content'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  </StrictMode>,
)
