import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import ShopCard from '../ShopCard'

describe('ShopCard', () => {
  it('should render correctly', () => {
    const button = shallow(<ShopCard />)
    expect(toJSON(button)).toMatchSnapshot()
  })
})
