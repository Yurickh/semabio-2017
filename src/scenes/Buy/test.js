import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Buy from '../Buy'

describe('Buy', () => {
  it('should render correctly', () => {
    const tree = shallow(<Buy />)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
