import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Title from '../Title'

describe('Title', () => {
  it('should render correctly', () => {
    const button = shallow(<Title />)
    expect(toJSON(button)).toMatchSnapshot()
  })
})
