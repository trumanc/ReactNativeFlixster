import React from 'react'
import MovieCell from './MovieCell'
import {
  ActivityIndicator,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import * as api from './api'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centering: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
class Movies extends React.Component {
  static propTypes = {
    onSelectMovie: React.PropTypes.func.isRequired,
  }
  state = {
    isLoading: false,
    isEmpty: false,
    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2})
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies() {
    this.setState({ isLoading: true })
    api.fetchMovies()
      .then(results => this.updateRows(results))
      .catch(error => {
        this.setState({ isLoading: false })
        console.error(error)
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
    if (this.state.isLoading) {
      return (
        <View style={[styles.container, styles.centering]}>
          <ActivityIndicator />
        </View>
      )
    } else if (this.state.isEmpty) {
        <View style={[styles.container, styles.centering]}>
          <Text>No results found.</Text>
        </View>
    }
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={row => (
          <TouchableOpacity onPress={() => this.props.onSelectMovie(row)}>
            <MovieCell movie={row}/>
          </TouchableOpacity>
        )}
      />
    )
  }
}

export default Movies
