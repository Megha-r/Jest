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
//   it(`should match header snapshot`, () => {
//     expect(sut.find('Menu').get(0)).toMatchSnapshot()
//   })

//   describe('should have prop className as visible', () => {
//     let visibility = {
//       topVisible: true
//     }

//     beforeEach(() => 
//       sut.setProps({visibility})
//     })

//     it(`should not have visibility class`, () => {
//       expect(sut.find('Menu').prop('className')).toBe('visible')
//     })
//   })

//   describe('should have prop className as blank', () => {
//     let visibility = {
//       topVisible: false
//     }

//     beforeEach(() => {
//       sut.setProps({visibility})
//     })

//     it(`should not have visible class `, () => {
//       expect(sut.find('Menu').prop('className')).toBe('')
//     })
//   })
})
