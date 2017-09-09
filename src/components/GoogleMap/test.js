import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import GoogleMap from '../GoogleMap'

describe('GoogleMap', () => {
  it('should render correctly', () => {
    const map = shallow(<GoogleMap lat={0} lng={0} zoom={4} />)
    expect(toJSON(map)).toMatchSnapshot()
  })
})
