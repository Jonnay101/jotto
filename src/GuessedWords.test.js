/* globals expect test */

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const defaultProps = [{
  guessedWords: [{ guessedWords: 'train', letterMatchCount: 3 }]
}]

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}

test('component renders without error', () => {
  const wrapper = setup()
  const 
})
