import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import BuyShirt from '../BuyShirt'

describe('BuyShirt', () => {
  it('should render correctly', () => {
    const tree = shallow(<BuyShirt
      match={{
        params: {
          product: 'shirt'
        }
      }}
    />)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
