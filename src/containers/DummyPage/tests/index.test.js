import React from 'react'
import { render } from '@testing-library/react'

import DummyPage from '../index'

describe('<DummyPage>', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<DummyPage />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
