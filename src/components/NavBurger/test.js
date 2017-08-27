import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import NavBurger from '../NavBurger'

describe('NavBurger', () => {
  let burger
  let onClick

  beforeEach(() => {
    onClick = jest.fn()

    burger = shallow(
      <NavBurger onClick={onClick} />
    )
  })

  it('should render correctly', () => {
    expect(toJSON(burger)).toMatchSnapshot()
  })

  it('properly activates callback when clicked', () => {
    expect(onClick).not.toHaveBeenCalled()
    burger.simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
