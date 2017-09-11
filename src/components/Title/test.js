import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Title from '../Title'

describe('Title', () => {
  it('should render correctly', () => {
    const title = shallow(<Title />)
    expect(toJSON(title)).toMatchSnapshot()
  })
})
