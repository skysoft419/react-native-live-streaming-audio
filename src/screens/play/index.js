import React from 'react'
import {
  View,
  Text,
  ImageBackground
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Header,
  TrackDetail,
  SeekBar,
  Controls
} from '../../shares'

import {
  commonActions,
  userActions
} from '../../actions'


import styles from './style'
import Video from "react-native-video";


const mapDispatchToProps = (dispatch) => {
  return ({
    userActions: bindActionCreators(userActions, dispatch),
    commonActions: bindActionCreators(commonActions, dispatch)
  })
}

const mapStateToProps = (state) => {
  return ({
    loading: state.common.loading,
    label: state.common.label,

    current_play: state.user.current_play,
    play_list: state.user.play_list

  })
}


class Play extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      paused: true,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack:this.props.navigation.state.params.index,
      repeatOn: false,
      shuffleOn: false,
    };
  }

  setDuration(data) {
    this.setState({totalLength: Math.floor(data.duration)});
  }

  setTime(data) {
    this.setState({currentPosition: Math.floor(data.currentTime)});
  }

  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }

  onBack() {
    console.log(this.props);
    console.log('===================')
    if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      this.props.userActions.setCurrentPlay(this.props.play_list[this.state.selectedTrack - 1])
      setTimeout(() => this.setState({
        currentPosition: 0,
        paused: false,
        totalLength: 1,
        isChanging: false,
        selectedTrack: this.state.selectedTrack - 1,
      }), 0);

    } else {
      this.refs.audioElement.seek(0);
      this.setState({
        currentPosition: 0,
      });
    }
  }

  onForward() {

    if (this.state.selectedTrack < this.props.play_list.length - 1) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      this.props.userActions.setCurrentPlay(this.props.play_list[this.state.selectedTrack + 1])
      setTimeout(() => this.setState({
        currentPosition: 0,
        totalLength: 1,
        paused: false,
        isChanging: false,
        selectedTrack: this.state.selectedTrack + 1,
      }), 0);

    }
  }


  render() {
    const { current_play } = this.props
    const video = this.state.isChanging ? null : (
        <Video source={{uri: current_play.audio_url}} // Can be a URL or a local file.
               ref="audioElement"
               paused={this.state.paused}               // Pauses playback entirely.
               resizeMode="cover"           // Fill the whole screen at aspect ratio.
               repeat={true}                // Repeat forever.
               onLoadStart={this.loadStart} // Callback when video starts to load
               onLoad={this.setDuration.bind(this)}    // Callback when video loads
               onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
               onEnd={this.onEnd}           // Callback when playback finishes
               onError={this.videoError}    // Callback when video cannot be loaded
               style={{height: 0,width: 0,}} />
    );

    return(
      <View style={styles.container}>
        {
          current_play == null ?
            <Header {...this.props} title={'Top Chart'} />
          :
            <Header {...this.props} title={'Enjoy the Music...'} />
        }
        <View style={styles.mainContainer}>
          <View style={styles.itemContent}>
          <ImageBackground style={styles.topImage} source={{uri:current_play.thumbnail}}/>
          {/* <ImageBackground style={styles.topImage} source={require('../../assets/images/play.png')}/> */}
          </View>
          <View style={styles.playerContent}>
            <TrackDetail live={false} title={current_play.title}/>
            <SeekBar
                onSeek={this.seek.bind(this)}
                trackLength={this.state.totalLength}
                onSlidingStart={() => this.setState({paused: true})}
                currentPosition={this.state.currentPosition} />

            <Controls
                onPressRepeat={() => this.setState({repeatOn : !this.state.repeatOn})}
                repeatOn={this.state.repeatOn}
                shuffleOn={this.state.shuffleOn}
                forwardDisabled={this.state.selectedTrack === 3 - 1}
                onPressShuffle={() => this.setState({shuffleOn: !this.state.shuffleOn})}
                onPressPlay={() => this.setState({paused: false})}
                onPressPause={() => this.setState({paused: true})}
                onBack={this.onBack.bind(this)}
                onForward={this.onForward.bind(this)}
                paused={this.state.paused}
                live={false}
            />
                {video}
          </View>
        </View>
      </View>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Play)
