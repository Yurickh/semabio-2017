import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Navbar from '../Navbar'

describe('Navbar', () => {
  it('should render correctly', () => {
    const navbar = shallow(<Navbar toggleMenu={_=>_}/>)
    expect(toJSON(navbar)).toMatchSnapshot()
  })
})
