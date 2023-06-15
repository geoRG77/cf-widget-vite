import React from 'react'
import Slider from './widgets/Slider'
import { createRoot } from 'react-dom/client'

const webWidget = document.getElementById('widget-slider')

const root = createRoot(webWidget)

webWidget &&
  root.render(
    <React.StrictMode>
      <Slider />
    </React.StrictMode>
  )
