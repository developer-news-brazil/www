import {expect} from 'chai';

import React from 'react';

import {shallow} from 'enzyme';

import Hello from '../app/components/Hello';

describe('<Hello />', () => {
  let component;

  before(() => {
    component = shallow(<Hello />);
  });

  it('renders with Hello text', () => {
    expect(component.text()).to.equal('Hello');
  });
});
