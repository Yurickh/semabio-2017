import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Carrousel from '../Carrousel'

describe('Carrousel', () => {
  let carrousel

  beforeEach(() => {
    carrousel = shallow(<Carrousel />)
  })

  it('should render correctly', () => {
    expect(toJSON(carrousel)).toMatchSnapshot()
  })

  it('passes to the next when fog-after is clicked', () => {
    const current = carrousel.state('selected')
    carrousel.find('.fog-after').simulate('click')
    expect(carrousel.state('selected')).toBe(current + 1)
  })

  it('returns to the previous when fog-before is clicked', () => {
    const current = carrousel.state('selected')
    carrousel.find('.fog-before').simulate('click')
    expect(carrousel.state('selected')).toBe(current - 1)
  })
})
