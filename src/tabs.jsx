import React from 'react'
import Tabs from './widgets/Tabs'
import { createRoot } from 'react-dom/client'

const webWidget = document.getElementById('widget-tabs')

const root = createRoot(webWidget)

webWidget &&
  root.render(
    <React.StrictMode>
      <Tabs />
    </React.StrictMode>
  )
