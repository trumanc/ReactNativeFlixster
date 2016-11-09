import React, { PropTypes } from 'react'
import {
  TouchableOpacity,
  View,
} from 'react-native'

const Button = ({ style, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={style} />
  </TouchableOpacity>
)

Button.propTypes = {
  style: View.propTypes.style,
  onPress: PropTypes.func.isRequired,
}

export default Button
