import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import BuyPackage from '../BuyPackage'

describe('BuyPackage', () => {
  it('should render correctly', () => {
    const tree = shallow(<BuyPackage
      match={{
        params: {
          product: 'E'
        }
      }}
    />)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
