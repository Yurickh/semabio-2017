import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import VariantSelector from '../VariantSelector'

describe('VariantSelector', () => {
  it('should render correctly', () => {
    const tree = shallow(<VariantSelector />)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
