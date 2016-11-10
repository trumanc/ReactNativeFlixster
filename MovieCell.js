import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import ProgressiveImage from './ProgressiveImage'
import * as api from './api'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgb(99, 99, 99)',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  overview: {
    fontSize: 12,
    color: 'rgb(130,130,130)'
  },
  poster: {
    marginRight: 10,
    width: 100,
    height: 100,
  },
})

const MovieCell = ({ movie }) => (
  <View style={styles.container}>
    <ProgressiveImage
      style={styles.poster}
      sourceHigh={{uri: api.getImageUrlHigh(movie.poster_path)}}
      sourceLow={{uri: api.getImageUrlLow(movie.poster_path)}}
      resizeMode="contain"
      resizeMethod="resize"
    />
    <View style={styles.textContainer} >
      <Text style={styles.title} numberOfLines={1} >{movie.title}</Text>
      <Text style={styles.overview} numberOfLines={3}>{movie.overview}</Text>
    </View>
  </View>
)
MovieCell.propTypes = {
  movie: React.PropTypes.object.isRequired,
}

export default MovieCell
