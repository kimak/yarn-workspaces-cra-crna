import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import test from 'core/test'

alert(test)

class App extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{ marginTop: 30 }}
        onPress={() => alert('just clicked a button!')}
      >
        <Text>Hello button</Text>
      </TouchableOpacity>
    )
  }
}

export default App
