import React from 'react'
import RadioGroup from './widgets/RadioGroup'
import { createRoot } from 'react-dom/client'

const webWidget = document.getElementById('widget-radiogroup')

const root = createRoot(webWidget)

webWidget &&
  root.render(
    <React.StrictMode>
      <RadioGroup />
    </React.StrictMode>
  )
