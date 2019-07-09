import React, { Component } from 'react'
import Foo from './components/Foo'
import Bar from './components/Bar'

export default class DummyPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'foo',
      bar: 'bar'
    }
  }

  render() {
    return (
      <>
        <Foo>Foo...</Foo>
        <Bar>Bar...</Bar>
      </>
    )
  }
}
