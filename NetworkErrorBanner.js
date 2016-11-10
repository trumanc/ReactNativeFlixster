import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'


const styles = StyleSheet.create({
  topBanner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    borderWidth: 1,
    borderColor: 'rgb(1,1,1)',
    backgroundColor: 'rgb(50, 50, 50)',
    opacity: 0.95,
    alignItems: 'center',
  },
  lightText: {
    color: 'rgb(200,200,200)',
  }
})
const NetworkErrorBanner = () => (
  <View style={styles.topBanner} >
    <Text style={styles.lightText}>There was a network error</Text>
  </View>
)
export default NetworkErrorBanner
