import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker Test', () => {

  it('renders ColorPicker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles red button click', () => {
    console.log = jest.fn();
    const wrapper = shallow(<ColorPicker />);

    wrapper.find('button').at(0).simulate('click');

    expect(console.log).toHaveBeenCalledWith('red');
  });

  it('handles yellow button click', () => {
    console.log = jest.fn();
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(1).simulate('click');
    expect(console.log).toHaveBeenCalledWith('yellow');
  });
  
  it('handles blue button click', () => {
    console.log = jest.fn();
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(2).simulate('click');
    expect(console.log).toHaveBeenCalledWith('blue');
  });

});
