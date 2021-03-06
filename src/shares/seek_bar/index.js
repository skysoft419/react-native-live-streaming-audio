import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style'

import Slider from 'react-native-slider'

function pad(n, width, z=0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position) => ([
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
]);
class SeekBar extends React.Component {
//
// const SeekBar = ({
//   trackLength,
//   currentPosition,
//   onSeek,
//   onSlidingStart,
// }) => {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    const {trackLength, currentPosition, onSeek, onSlidingStart} = this.props
    const elapsed = minutesAndSeconds(currentPosition);
    const remaining = minutesAndSeconds(trackLength - currentPosition);
    return (
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>
              {elapsed[0] + ":" + elapsed[1]}
            </Text>
            <View style={{flex: 1}}/>
            <Text style={[styles.text, {width: 40}]}>
              {trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]}
            </Text>
          </View>
          <Slider
              maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
              onSlidingStart={onSlidingStart}
              onSlidingComplete={onSeek}
              value={currentPosition}
              style={styles.slider}
              minimumTrackTintColor='#fff'
              maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
              thumbStyle={styles.thumb}
              trackStyle={styles.track}/>
        </View>
    );
  };
}

export default SeekBar;

