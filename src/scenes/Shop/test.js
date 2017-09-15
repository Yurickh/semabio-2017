import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Shop from '../Shop'

describe('Shop', () => {
  it('should render correctly', () => {
    const shop = shallow(<Shop />)
    expect(toJSON(shop)).toMatchSnapshot()
  })
})
