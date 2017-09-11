import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Carrousel from '../Carrousel'

describe('Carrousel', () => {
  let carrousel

  beforeEach(() => {
    carrousel = shallow(<Carrousel deterministic />)
  })

  it('should render correctly', () => {
    expect(toJSON(carrousel)).toMatchSnapshot()
  })
})
