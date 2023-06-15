import React from 'react'
import Toolbar from './widgets/Toolbar'
import { createRoot } from 'react-dom/client'

const webWidget = document.getElementById('widget-toolbar')

const root = createRoot(webWidget)

webWidget &&
  root.render(
    <React.StrictMode>
      <Toolbar />
    </React.StrictMode>
  )
