import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
  Image
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Header,
  AudioItem
} from '../../shares'

import {
  commonActions,
  userActions
} from '../../actions'


import styles from './style'
const { height, width } = Dimensions.get('window')

import {
  normalize
} from '../../helpers'


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

    play_list: state.user.play_list
  })
}


class PlayList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.startPlay = this.startPlay.bind(this)
    this.startPlayALL = this.startPlayALL.bind(this)

  }

  componentDidMount() {
    this.props.userActions.getPlayList()
  }

  startPlay(item,index) {
    this.props.userActions.setCurrentPlay(item)
    this.props.navigation.navigate('Play',{index:index})
  }
  startPlayALL() {
    this.props.userActions.setCurrentPlay(this.props.play_list[0])
    this.props.navigation.navigate('Play',{index:0})
  }

  render() {

    return(
      <ImageBackground style={styles.backImage} source={require('../../assets/images/background_play_list.png')}>
        <View style={styles.container}>
          <Header {...this.props} title={'PlayList'} />
          {
            this.props.play_list.length > 0 ?
              <View style={styles.listContainer}>
                <ScrollView>
                  <View style={{  
                    flexDirection: 'row', 
                    flexWrap: 'wrap' ,
                  }}>
                <TouchableOpacity onPress={this.startPlayALL}>
                        <View style={{
                          width: width,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingHorizontal: normalize(10),
                          paddingVertical: normalize(10),
                          borderBottomWidth: normalize(0.5),
                          borderBottomColor: '#646666'                          
                        }}>
                          <Text
                          style={{
                            fontSize: normalize(20),
                            color: '#ffffff',
                            textAlign: 'left'
                          }} 
                          >Play All Music</Text>
                          <Image style={{
                              width: normalize(30),
                              height: normalize(30),
                              marginLeft: normalize(10)
                          }} source={require('../../assets/icons/play.png')} />
                        </View>
                  </TouchableOpacity>
                  {
                    this.props.play_list.map((item, index) => {
                      return (
                        <AudioItem
                          key={`play_item_${index}`}
                          item={item}
                          index={index}
                          onPress={this.startPlay}
                        />
                      )
                    })
                  }
                  </View>
                </ScrollView>
              </View>
            :
              <View style={styles.mainContent}>
                <Text style={styles.alertText}>No Data</Text>
              </View>
          }
        </View>
      </ImageBackground>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList)
