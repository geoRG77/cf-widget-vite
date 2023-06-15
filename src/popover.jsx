import React from 'react'
import Popover from './widgets/Popover'
import { createRoot } from 'react-dom/client'

const webWidget = document.getElementById('widget-popover')

const root = createRoot(webWidget)

webWidget &&
  root.render(
    <React.StrictMode>
      <Popover />
    </React.StrictMode>
  )
