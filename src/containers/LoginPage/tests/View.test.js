import React from 'react'
import { render } from '@testing-library/react'

 import View from '../index'

 describe('<LoginPage />', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<View />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
