import React from 'react'
import { shallow } from 'enzyme'

import Header from './components/MyTable'

describe('Header', () => {
  let sut

  beforeEach(() => {
    sut = shallow(<Header />)
  })

  it('renders a coulmns of Table Component', () => {
      console.log('healdjalhsdoual')
    expect(wrapper.find('#btnID').length).toEqual(1)
  })

})
