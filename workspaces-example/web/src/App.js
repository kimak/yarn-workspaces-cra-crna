import React, { Component } from 'react'
import test from 'core/test'

alert(test)

class App extends Component {
  render() {
    return (
      <button onClick={() => alert('just clicked a button!')}>
        Hello button
      </button>
    )
  }
}

export default App
