import React from 'react'
import {
  BackAndroid,
  Platform,
  Text,
} from 'react-native'
import NavMovies from './NavMovies'
import ScrollableTabView, { DefaultTabBar }  from 'react-native-scrollable-tab-view'


let navRef = null

class TabApp extends React.Component {
  componentDidMount() {
    if (Platform.OS == 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onHardwareBackPress)
    }
  }
  onHardwareBackPress = () => {
    if (this.currentTab == 0 && this.navRef && this.navRef.getCurrentRoutes().length > 1) {
      this.navRef.pop();
      return true;
    }
    return false;
  }

  componentWillUnMount() {
    if (Platform.OS == 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onHardwareBackPress)
    }
  }
  navRef = null
  currentTab = 0
  render() {
    return(
      <ScrollableTabView
        style={{ marginTop: 20 }}
        locked
        onChangeTab={({ i }) => (this.currentTab = i)}
        renderTabBar={() => <DefaultTabBar />}
      >
        <NavMovies tabLabel="Now Playing" onNavChange={nav => (this.navRef = nav)}/>
        <Text tabLabel="Top Rated">Top rated</Text>
      </ScrollableTabView>
    )
  }
}
export default TabApp
