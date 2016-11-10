import React from 'react'
import {
  Navigator,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Movies from './Movies'
import MovieDetails from './MovieDetails'

const navBarHeight = 40
const navBarStyle = {
  height: navBarHeight,
  backgroundColor: 'rgb(258,117,98)'
}

const NavMovies = ({ onNavChange, apiUrl }) => (
  <Navigator
    style={{ paddingTop: navBarHeight }}
    initialRoute={{ key: 'movies' }}
    renderScene={(route, navigator) => {
      onNavChange(navigator)
      navRef = navigator
      if (route.key == 'movies') {
        return <Movies
                 apiUrl={apiUrl}
                 onSelectMovie={ mov => navigator.push({ key: 'details', movie: mov})}
               />
      }
      return <MovieDetails movie={route.movie}/>
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
