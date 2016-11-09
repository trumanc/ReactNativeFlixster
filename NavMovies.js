import React from 'react'
import {
  BackAndroid,
  Navigator,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Movies from './Movies'

const navBarHeight = 60
const navBarStyle = {
  height: navBarHeight,
  backgroundColor: 'rgb(258,117,98)'
}

const NavMovies = ({ onNavChange }) => (
  <Navigator
    style={{ paddingTop: navBarHeight }}
    initialRoute={{ key: 'movies' }}
    renderScene={(route, navigator) => {
      onNavChange(navigator)
      navRef = navigator
      if (route.key == 'movies') {
        return <Movies onSelectMovie={ mov => navigator.push({ key: 'details', movie: mov})}/>
      }
      return (
        <View style={{ flex: 1, backgroundColor: 'rgb(230,230,230)'}} >
          <Text>I am a details screen</Text>
          <Text>{route.movie.title}</Text>
        </View>
      )
    }}
    configureScene={() => Navigator.SceneConfigs.FloatFromBottom}
    navigationBar={
      <Navigator.NavigationBar
        style={navBarStyle}
        routeMapper={{
          LeftButton: (route, navigator) => {
            if (route.key == 'movies') return null;
            return (
              <TouchableOpacity onPress={() => navigator.pop()}>
                <Text>Back</Text>
              </TouchableOpacity>)
          },
          RightButton: () => {},
          Title: (route) => {
            if (route.key == 'movies') {
              return <Text>Now Playing</Text>
            }
            return null
          },
        }}
      />
    }
  />
)

NavMovies.propTypes = {
  onNavChange: React.PropTypes.func,
}
export default NavMovies
