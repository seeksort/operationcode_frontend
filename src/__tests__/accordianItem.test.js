import React from 'react';
import renderer from 'react-test-renderer';
import AccordianItem from './../shared/components/accordian/accordianItem/accordianItem';

it('renders correctly', () => {
  const tree = renderer.create(
    <AccordianItem>
      example
    </AccordianItem>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
