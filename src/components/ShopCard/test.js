import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import ShopCard from '../ShopCard'

describe('ShopCard', () => {
  it('should render correctly', () => {
    const card = shallow(
      <ShopCard
        root='/'
        product='A'
        title="test title"
        price={ 3.14 }
        level={2}
      />
    )
    expect(toJSON(card)).toMatchSnapshot()
  })
})
