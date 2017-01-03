import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from './Button';

describe(Button, () => {
  const mockOnClick = jest.fn();
  const component = shallow(
    <Button onClick={mockOnClick} />
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <Button />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the button', () => {
    expect(component.find('button')).toHaveLength(1);
  });

  it('calls the passed in mockOnClick function when button is clicked', () => {
    component.find('button').simulate('click');
    expect(mockOnClick).toBeCalled();
  });

});
