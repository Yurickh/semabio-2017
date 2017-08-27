import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Price from '../Price'

describe('Price', () => {
  let button

  beforeEach(() => {
    button = shallow(
      <Price>{ 3.14 }</Price>
    )
  })

  it('should render correctly', () => {
    expect(toJSON(button)).toMatchSnapshot()
  })

  it('pads zeros before decimal', () => {
    button.setProps({ children: 4.05 })
    expect(button.find('.decimal').text()).toBe(',05')
  })

  it('pads zeros after decimal', () => {
    button.setProps({ children: 20.2 })
    expect(button.find('.decimal').text()).toBe(',20')
  })
})
