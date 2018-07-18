import React from 'react';
import Mytable from '../components/MyTable';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { Button } from '../components/StyleComponent/Button';




configure({ adapter: new Adapter() });
let wrapper;
describe('Table Component', () => {

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

let buttonWrapper;


describe('*** Button ***', () => {
  //     //  function handleBtnClickID() {
  // //         console.log("Button sorting id tapped ********");

  // //       }
  // // var spy = sinon.spy(handleBtnClickID);
  // // handleBtnClickID();
  // // expect(spy.called).toEqual(false); 

  it('should invoke handleClickID callback when click to "Button"', () => {
    // wrapper = shallow(<Mytable />);
    const buttonWrapper = mount(<Mytable />);

    const onButtonClickID = sinon.spy(buttonWrapper.instance(), 'handleBtnClickID');
    buttonWrapper.find(Button).at(0).simulate('click');
    console.log('should invoke handleClickID callback',onButtonClickID.called);

    expect(onButtonClickID.called).toEqual(true)

    // wrapper.find('#btnID').simulate('click')

    // expect(onButtonClickID.called).toBe(true); //false
  });
});



