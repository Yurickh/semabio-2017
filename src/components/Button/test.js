import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Button from '../Button'

describe('Button', () => {
  it('should render correctly', () => {
    const button = shallow(<Button />)
    expect(toJSON(button)).toMatchSnapshot()
  })
})
