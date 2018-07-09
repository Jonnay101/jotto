import React from 'react'
import PropTypes from 'prop-types'

export default (props) => {
  if (props.success) {
    // make component
    return (
      <div datat-test='component-congrats'>
        <span data-test='congrats-message'>
          Congratlations! You guessed the word!
        </span>
      </div>
    )
  } else {
    return (
      <div data-test='component-congrats' />
    )
  }
}
