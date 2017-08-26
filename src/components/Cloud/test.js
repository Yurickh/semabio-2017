import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Cloud from '../Cloud'

describe('Cloud', () => {
  it('should render correctly', () => {
    const button = shallow(<Cloud />)
    expect(toJSON(button)).toMatchSnapshot()
  })
})
