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

import Video from 'react-native-video';
import {LivePlayer} from "react-native-live-stream";

import styles from './style'

// const url="https://firebasestorage.googleapis.com/v0/b/keralafm-d6b3b.appspot.com/o/1568041828807?alt=media&token=76e7151f-ecca-4cf0-bbdf-23bb0975504d";
const url1="https://firebasestorage.googleapis.com/v0/b/keralafm-d6b3b.appspot.com/o/1568038713809?alt=media&token=4fe27709-3290-41ef-9827-4078177ef381";
const url="http://s3.voscast.com:9560/5d8f50a5e233f/";
const mapDispatchToProps = (dispatch) => {
  // this.setState({paused: true});
  return ({
    userActions: bindActionCreators(userActions, dispatch),
    commonActions: bindActionCreators(commonActions, dispatch)
  })
}

const mapStateToProps = (state) => {
  return ({
    loading: state.common.loading,
    label: state.common.label
  })
}


class LivePlay extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
          paused: true,
          totalLength: 1,
          currentPosition: 0,
          selectedTrack: 0,
          repeatOn: false,
          shuffleOn: false,
      };

  }


    seek(time) {
        time = Math.round(time);
        this.refs.audioElement && this.refs.audioElement.seek(time);
        this.setState({
            currentPosition: time,
            paused: false,
        });
    }

    setDuration(data) {
        // console.log(totalLength);
        this.setState({totalLength: Math.floor(data.duration)});
    }

    setTime(data) {
        //console.log(data);
        this.setState({currentPosition: Math.floor(data.currentTime)});
    }
    onBack() {
        if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
            this.refs.audioElement && this.refs.audioElement.seek(0);
            this.setState({ isChanging: true });
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
        if (this.state.selectedTrack < 3 - 1) {
            this.refs.audioElement && this.refs.audioElement.seek(0);
            this.setState({ isChanging: true });
            setTimeout(() => this.setState({
                currentPosition: 0,
                totalLength: 1,
                paused: false,
                isChanging: false,
                selectedTrack: this.state.selectedTrack + 1,
            }), 0);
        }
    }
    onPause(){

      this.setState({paused: false});
      return this.state.paused;
    }
    onReasum(){
      this.setState({paused: true});
      console.log('==============================')
      return this.state.paused;

    }

    componentDidMount(){

    }
    componentWillUnmount(){
        this.setState({paused: true});
      console.log('==============================')

    }

  render() {

      // const video = this.state.isChanging ? null : (
      //     <Video source={{uri: 'track.audioUrl'}} // Can be a URL or a local file.
      //            ref="audioElement"
      //            paused={this.state.paused}               // Pauses playback entirely.
      //            resizeMode="cover"           // Fill the whole screen at aspect ratio.
      //            repeat={true}                // Repeat forever.
      //            onLoadStart={this.loadStart} // Callback when video starts to load
      //            onLoad={this.setDuration.bind(this)}    // Callback when video loads
      //            onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
      //            onEnd={this.onEnd}           // Callback when playback finishes
      //            onError={this.videoError}    // Callback when video cannot be loaded
      //            style={{height: 0,width: 0,}} />
      // );

    return(
      <View style={styles.container}>
        <Header {...this.props} title={'Live Player'} />
        <View style={styles.mainContainer}>
          <View style={styles.itemContent}>
            <ImageBackground style={styles.topImage} source={require('../../assets/images/play.png')}>
            </ImageBackground>
          </View>
          <View style={styles.playerContent}>
            <TrackDetail live={true} title={""} />
              {/* <SeekBar
                  onSeek={this.seek.bind(this)}
                  trackLength={this.state.totalLength}
                  onSlidingStart={() => this.setState({paused: true})}
                  currentPosition={this.state.currentPosition} /> */}
              <Controls
                  onPressRepeat={() => this.setState({repeatOn : !this.state.repeatOn})}
                  repeatOn={this.state.repeatOn}
                  shuffleOn={this.state.shuffleOn}
                  forwardDisabled={this.state.selectedTrack === 3 - 1}
                  onPressShuffle={() => this.setState({shuffleOn: !this.state.shuffleOn})}
                  onPressPlay={this.onPause.bind(this)}
                  onPressPause={this.onReasum.bind(this)}
                  onBack={this.onBack.bind(this)}
                  onForward={this.onForward.bind(this)}
                  paused={this.state.paused}
                  live={true}
              />
             {/* <Player url={url} /> */}
              <LivePlayer source={{uri:url}}
                      ref={(ref) => {
                      this.player = ref
                  }}
                      style={{width:0,height:0}}
                      paused={this.state.paused}
                      muted={false}
                      bufferTime={300}
                      maxBufferTime={1000}
                      resizeMode={"contain"}
                      onLoading={()=>{}}
                      onLoad={()=>{}}
                      onEnd={()=>{}}
                  />
          </View>
        </View>
      </View>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LivePlay)
