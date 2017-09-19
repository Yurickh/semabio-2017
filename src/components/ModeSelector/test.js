import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import ModeSelector from '../ModeSelector'

describe('ModeSelector', () => {
  it('should render correctly', () => {
    const tree = shallow(<ModeSelector />)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
