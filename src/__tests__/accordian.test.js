import React from 'react';
import renderer from 'react-test-renderer';
import Accordian from './../shared/components/accordian/accordian';
import AccordianItem from './../shared/components/accordian/accordianItem/accordianItem';

it('renders correctly', () => {
  const tree = renderer.create(
    <Accordian>
      <AccordianItem>child 1</AccordianItem>
      <AccordianItem>child 2</AccordianItem>
    </Accordian>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
