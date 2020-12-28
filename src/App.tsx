import React from 'react'
import { createState } from '@hookstate/core'

const App = () => {
  const testState = createState({})

  return (
    <div>
      <h1>Hookstate-Process-Error</h1>
      <p>
        Create your view within here. You can also have other component files
        that get exported if they are needed by other projects. This can be
        configured in &quot;Hookstate-Process-Error/webpack.config.js&quot;
      </p>
    </div>
  )
}

export default App
