import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Countdown from '../Countdown'

describe('Countdown', () => {
  it('should render correctly', () => {
    const tree = shallow(<Countdown />)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
