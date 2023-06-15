import React from 'react'
import Select from './widgets/Select'
import { createRoot } from 'react-dom/client'

const webWidget = document.getElementById('widget-select')

const root = createRoot(webWidget)

webWidget &&
  root.render(
    <React.StrictMode>
      <Select />
    </React.StrictMode>
  )
