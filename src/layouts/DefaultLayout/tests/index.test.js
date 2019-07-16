import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import DefaultLayout from '../index'

describe('<DefaultLayout>', () => {
  it('should render and match the snapshot', () => {
    const DummyComponent = () => <div />
    const { container } = render(
      <BrowserRouter>
        <DefaultLayout component={DummyComponent}/>
      </BrowserRouter>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
