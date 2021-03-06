import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Price from '../Price'

describe('Price', () => {
  let price

  beforeEach(() => {
    price = shallow(
      <Price>{ 3.14 }</Price>
    )
  })

  it('should render correctly', () => {
    expect(toJSON(price)).toMatchSnapshot()
  })

  it('pads zeros before decimal', () => {
    price.setProps({ children: 4.05 })
    expect(price.find('.decimal').text()).toBe(',05')
  })

  it('pads zeros after decimal', () => {
    price.setProps({ children: 20.2 })
    expect(price.find('.decimal').text()).toBe(',20')
  })
})
