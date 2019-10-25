import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './style'

const Controls = ({
                      paused,
                      shuffleOn,
                      repeatOn,
                      onPressPlay,
                      onPressPause,
                      onBack,
                      onForward,
                      onPressShuffle,
                      onPressRepeat,
                      forwardDisabled,
                      live
                  }) => (
      <View style={styles.container}>
        {
          live == false ?
            <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
              <Image style={[styles.secondaryControl, shuffleOn ? [] : styles.off]} source={require('../../assets/icons/shuffle.png')}/>
            </TouchableOpacity>
          :
            null
        }
        <View style={styles.width40} />
        {
          live == false ?
            <TouchableOpacity onPress={onBack}>
              <Image style={styles.primaryControl} source={require('../../assets/icons/prev.png')}/>
            </TouchableOpacity>
          :
            null
        }
        <View style={styles.width20} />

          {!paused ?
              <TouchableOpacity onPress={onPressPause}>
                  <View style={styles.playButton}>
                      <Image style={styles.primaryControl} source={require('../../assets/icons/pause.png')}/>
                  </View>
              </TouchableOpacity> :
              <TouchableOpacity onPress={onPressPlay}>
                  <View style={styles.playButton}>
                      <Image style={styles.primaryControl} source={require('../../assets/icons/play_white.png')}/>
                  </View>
              </TouchableOpacity>
          }


        <View style={styles.width20} />
        {
          live == false ?
            <TouchableOpacity onPress={onForward}
                              disabled={forwardDisabled}>
              <Image style={styles.primaryControl} source={require('../../assets/icons/next.png')}/>
            </TouchableOpacity>
          :
            null
        }
        <View style={styles.width40} />
        {
          live == false ?
            <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
              <Image style={[styles.secondaryControl, repeatOn ? [] : styles.off]} source={require('../../assets/icons/repeat.png')}/>
            </TouchableOpacity>
          :
            null
        }
      </View>
);

export default Controls;
