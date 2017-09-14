import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import ScheduleTable from '../ScheduleTable'

describe('ScheduleTable', () => {
  it('should render correctly', () => {
    const tree = shallow(<ScheduleTable />)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
