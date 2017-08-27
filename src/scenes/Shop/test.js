import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Shop from '../Shop'

describe('Shop', () => {
  it('should render correctly', () => {
    const button = shallow(<Shop />)
    expect(toJSON(button)).toMatchSnapshot()
  })
})
