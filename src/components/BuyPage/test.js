import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import BuyPage from '../BuyPage'

describe('BuyPage', () => {
  it('should render correctly', () => {
    const tree = shallow(<BuyPage />)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
