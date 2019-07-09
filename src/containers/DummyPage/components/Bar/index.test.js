import React from 'react'
import { render } from '@testing-library/react'

import Bar from './index'

describe('<Bar>', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<Bar>text</Bar>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
