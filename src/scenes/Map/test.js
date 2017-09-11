import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Map from '../Map'

describe('Map', () => {
  it('should render correctly', () => {
    const page = shallow(<Map />)
    expect(toJSON(page)).toMatchSnapshot()
  })
})
