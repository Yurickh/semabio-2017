import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import ShopCard from '../ShopCard'

describe('ShopCard', () => {
  it('should render correctly', () => {
    const button = shallow(
      <ShopCard
        title="test title"
        price={ 3.14 }
        level={2}
      />
    )
    expect(toJSON(button)).toMatchSnapshot()
  })
})
