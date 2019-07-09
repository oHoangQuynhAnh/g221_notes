import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Foo from './index'

describe('<Foo>', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<Foo>text</Foo>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should increase counter onClick', () => {
    const { container } = render(<Foo>text</Foo>)
    const clickableText = container.querySelector('p')
    fireEvent.click(clickableText)
    expect(container.querySelector('span.counter').innerHTML).toEqual('1')
  })
})
