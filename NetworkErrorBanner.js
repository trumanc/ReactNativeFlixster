import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'


const styles = StyleSheet.create({
  topBanner: {
    zIndex: 100,  // Bug here on android :(
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    borderWidth: 1,
    borderColor: 'rgb(1,1,1)',
    backgroundColor: 'rgb(100, 100, 200)',
    alignItems: 'center',
  },
})
const NetworkErrorBanner = () => (
  <View style={styles.topBanner} >
    <Text>There was a network error</Text>
  </View>
)
export default NetworkErrorBanner
