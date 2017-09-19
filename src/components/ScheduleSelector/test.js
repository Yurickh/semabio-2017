import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import ScheduleSelector from '../ScheduleSelector'

describe('ScheduleSelector', () => {
  it('should render correctly', () => {
    const tree = shallow(<ScheduleSelector />)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
