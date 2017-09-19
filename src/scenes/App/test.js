import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import App from '../App'

describe('App', () => {
  it('should render correctly', () => {
    const page = shallow(<App />)
    expect(toJSON(page)).toMatchSnapshot()
  })
})
