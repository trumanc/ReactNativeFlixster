import React from 'react'
import MovieCell from './MovieCell'
import Chance from 'chance'
import {
  ActivityIndicator,
  ListView,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import NetworkErrorBanner from './NetworkErrorBanner'
import * as api from './api'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absolute: {
    position: 'absolute',
  },
  centering: {
    justifyContent: 'center',
  },
})
class Movies extends React.Component {
  static propTypes = {
    apiUrl: React.PropTypes.string,
    onSelectMovie: React.PropTypes.func.isRequired,
  }
  state = {
    refreshing: false,
    isLoading: false,
    isEmpty: true,
    networkErrorOccured: false,
    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2})
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies() {
    this.setState({ isLoading: true, networkErrorOccured: false})
    let url = new Chance(Math.random).bool() ? this.props.apiUrl : "https://some.fake.address.for.failure"
    return api.fetchMovies(url)
      .then(results => this.updateRows(results))
      .catch(error => {
        this.setState({ isLoading: false, networkErrorOccured: true })
      })
  }
  _onRefresh() {
    this.setState({ refreshing: true })
    this.fetchMovies().then(() => {
      this.setState({refreshing: false})
    })
  }
  updateRows(rows) {
    this.setState({
      isLoading: false,
      isEmpty: rows.length == 0,
      dataSource: this.state.dataSource.cloneWithRows(rows),
    })
  }

  render() {
    return (
      <View style={[styles.container, styles.centering]} >
        {this.state.isEmpty ?
          (this.state.isLoading ?
            <ActivityIndicator style={styles.centering}/> :
            <Text style={{alignSelf: 'center'}}>No results found.</Text>
          ) :
          (<View style={styles.container} >
            <ListView
              style={styles.container}
              dataSource={this.state.dataSource}
              renderRow={row => (
                <TouchableOpacity onPress={() => this.props.onSelectMovie(row)}>
                  <MovieCell movie={row}/>
                </TouchableOpacity>
              )}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh.bind(this)}
                />
              }
            />
        </View>)
        }
        {this.state.networkErrorOccured ? <NetworkErrorBanner /> : <View />}
      </View>
    )
  }
}

export default Movies
