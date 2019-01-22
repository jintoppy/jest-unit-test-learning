import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('<Search />', () => {
    const props = {
        onSearch: jest.fn()
    };

    test('should call onSearch on button click', () => {
        const wrapper = shallow(<Search {...props} />);
        wrapper.setState({
            value: 'dummyval'
        });
        const buttonComponent = wrapper.find('button');
        buttonComponent.simulate('click');
        expect(props.onSearch).toHaveBeenCalledWith('dummyval');
    });

});