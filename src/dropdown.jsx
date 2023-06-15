import React from 'react'
import Dropdown from './widgets/Dropdown'
import { createRoot } from 'react-dom/client'

const webWidget = document.getElementById('widget-dropdown')

const root = createRoot(webWidget)

webWidget &&
  root.render(
    <React.StrictMode>
      <Dropdown />
    </React.StrictMode>
  )
