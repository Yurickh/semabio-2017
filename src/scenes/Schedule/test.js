import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Schedule from '../Schedule'

describe('Schedule', () => {
  it('should render correctly', () => {
    const tree = shallow(<Schedule />)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
