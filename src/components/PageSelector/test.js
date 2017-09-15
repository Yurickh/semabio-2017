import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import PageSelector from '../PageSelector'

describe('PageSelector', () => {
  it('should render correctly', () => {
    const tree = shallow(<PageSelector />)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
