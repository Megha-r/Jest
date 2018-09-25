
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedForm from '../components/Form';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
// import sinon from 'sinon';

configure({ adapter: new Adapter() });
let wrapper;
// let wrapperS;
// const initialState = {}; 
// const mockStore = configureStore();
// let store;
describe('Form Component', () => {
 
  beforeEach(()=>{
    wrapper = shallow(<ConnectedForm />);
  })
  
  it('renders correctly', () => {
    console.log('**********', wrapper.instance());
    const tree = renderer.create(
      <ConnectedForm />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('should render without throwing an error', () => {
      expect(wrapper.find('#form').exists()).toBe(true)
    })
  

   it('renders a text input', () => {
    expect(wrapper.find('#textInput').length).toEqual(1)
   })

   it('should renders a Save Button', () => {
    expect(wrapper.find('#savedBtn').exists()).toBe(true)
  })


   describe('On Submit Function', () => {
    it('`<form>` element should have a onSubmit attribute', () => {
      expect(
        wrapper.props().onSubmit
      ).toBeDefined();
    });
  })
  
}) 
 
      



