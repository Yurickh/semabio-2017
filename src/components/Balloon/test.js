import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Balloon from '../Balloon'

describe('Balloon', () => {
  it('should render correctly', () => {
    const tree = shallow(<Balloon type="question">
      potato solid
    </Balloon>)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
