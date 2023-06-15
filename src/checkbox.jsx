import React from 'react'
import Checkbox from './widgets/Checkbox'
import { createRoot } from 'react-dom/client'

const webWidget = document.getElementById('widget-checkbox')

const root = createRoot(webWidget)

webWidget &&
  root.render(
    <React.StrictMode>
      <Checkbox />      
    </React.StrictMode>
  )
