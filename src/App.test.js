import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import axios from 'axios';
jest.mock('axios');

describe('<App />', () => {

    beforeEach(() => {
      axios.get.mockImplementation((url) => {
        if(url === 'https://jsonplaceholder.typicode.com/posts'){
          return {
            data: [{id: 1, title: 'asdf', body: 'ads'}]
          }
        }
      });
    });

    test('should have div with class name App', () => {
      const wrapper = shallow(<App />);      
      //wrapper.update();
      wrapper.instance().componentDidMount();
      console.log(wrapper.debug());
      expect(wrapper.find('div.App').length).toBe(1);
      const searchComponent = wrapper.find('Search');
      expect(wrapper.find('Search')).toHaveLength(1);
    });

});