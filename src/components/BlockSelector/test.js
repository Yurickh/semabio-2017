import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import BlockSelector from '../BlockSelector'

describe('BlockSelector', () => {
  it('should render correctly', () => {
    const tree = shallow(<BlockSelector />)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
