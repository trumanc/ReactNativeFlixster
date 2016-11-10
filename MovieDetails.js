import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import ProgressiveImage from './ProgressiveImage'
import * as api from './api'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  portraitContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  landscapeContainer: {
    flexDirection: 'row',
  },
  landscapeTextContainer: {
    flexDirection: 'column',
  },
  titleText: {
    fontSize: 24,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  ratingText: {
    fontSize: 18,
    padding: 5,
  },
  overviewText: {
    fontSize: 12,
    padding: 10,
  },
})
class MovieDetails extends React.Component {
  state = {
    isPortrait: false,
    height: 0,
    width: 0,
  }
  static propTypes = {
    movie: React.PropTypes.object,
  }
  onInnerLayout  = ({nativeEvent}) => {
    this.setState({
      isPortrait: nativeEvent.layout.width < nativeEvent.layout.height,
      height: nativeEvent.layout.height,
      width: nativeEvent.layout.width,
    })
  }
  render() {
    return (
      <View style={styles.container} onLayout={this.onInnerLayout} >
        {this.state.isPortrait ? (
          <ScrollView style={styles.portraitContainer}>
            <ProgressiveImage
              style={{width: this.state.width, height: this.state.width / 1.618 }}
              sourceLow={{uri: api.getImageUrlLow(this.props.movie.backdrop_path)}}
              sourceHigh={{uri: api.getImageUrlHigh(this.props.movie.backdrop_path)}} />
            <Text style={styles.titleText}>{this.props.movie.title}</Text>
            <Text style={styles.ratingText}>{this.props.movie.vote_average} / 10</Text>
            <Text>{this.props.movie.overview}</Text>
          </ScrollView>
        ) : (
          <View style={styles.landscapeContainer}>
            <ProgressiveImage
              style={{width: this.state.height / 1.618, height: this.state.height}}
              sourceLow={{uri: api.getImageUrlLow(this.props.movie.poster_path)}}
              sourceHigh={{uri: api.getImageUrlHigh(this.props.movie.poster_path)}} />
            <ScrollView style={styles.portraitContainer}>
              <Text style={styles.titleText}>{this.props.movie.title}</Text>
              <Text style={styles.ratingText}>{this.props.movie.vote_average} / 10</Text>
              <Text>{this.props.movie.overview}</Text>
            </ScrollView>
          </View>
        )}
      </View>
    )
  }

}
export default MovieDetails
