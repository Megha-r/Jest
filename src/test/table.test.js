import React from 'react';
import Mytable from '../components/MyTable';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

const mockProps = {
  handleBtnClickID: jest.fn()
}


configure({ adapter: new Adapter() });
let wrapper;
describe('***--- Table Component --- ***', () => {

  beforeEach(() => {
    wrapper = shallow(<Mytable />);
  })

  it('background render without throwing an error', () => {
    expect(wrapper.find('#background').exists()).toBe(true)

  });

  it('renders a wrapper Component', () => {
    expect(wrapper.find('#heading').length).toEqual(1)
  })

  it('renders a Bootstrap Table Component', () => {
    expect(wrapper.find('#table').length).toEqual(1)
  })

  it('renders a coulmns of Table Component', () => {
    expect(wrapper.find('#column').length).toEqual(5)
  })

  it('renders a coulmns of Table Component', () => {
    expect(wrapper.find('#btnID').length).toEqual(1)
  })

  it('renders a coulmns of Table Component', () => {
    
    expect(wrapper.find('#btnName').length).toEqual(1)
  })

})



describe('*** Sort by ID Button ***', () => {
  
  it('should call handleBtnClickID() when clicked', () => {
    const spy = sinon.spy(Mytable.prototype, 'handleBtnClickID')
    const wrapper = mount(<Mytable />)
    wrapper.find("#btnID").at(1).simulate('click')
    expect(spy.calledOnce).toEqual(true)
    });

  })

  describe('*** Sort by Name Button ***', () => {
  
    it('should call handleBtnClickName() when clicked', () => {
      const spy = sinon.spy(Mytable.prototype, 'handleBtnClickName')
      const wrapper = mount(<Mytable />)
      wrapper.find("#btnName").at(1).simulate('click')
      expect(spy.calledOnce).toEqual(true)
      });
  
    })

    

