import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Features from '../Features'

describe('Features', () => {
  it('should render correctly', () => {
    const tree = shallow(<Features />)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
