/* global test expect */

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Congrats from './Congrats'
import { findByTestAttr, checkProps } from '../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const defaultProps = { success: false }

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Congrats {...setupProps} />)
}

test('that it renders without error', () => {
  // get the wrapper
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})

test('renders no text when the `success` prop is false', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.text()).toBe('')
})

test('renders non-empty message when the `success` prop is true', () => {
  const wrapper = setup({ success: true })
  const message = findByTestAttr(wrapper, 'congrats-message')
  expect(message.text().length).not.toBe(0)
})

test('does not throw a warning with expected props', () => {
  const expectedProps = { success: false }
  checkProps(Congrats, expectedProps)
})
