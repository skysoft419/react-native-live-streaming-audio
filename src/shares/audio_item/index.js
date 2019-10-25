import React from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'


import styles from './style'


class AudioItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.startPlay = this.startPlay.bind(this)
  }

  startPlay() {
    const { onPress, item,index } = this.props
    onPress(item,index)
  }

  render() {

    const { item } = this.props

    return(
      <TouchableOpacity onPress={this.startPlay}>
        <View style={styles.container}>
            <Image style={styles.audioIcon} source={{uri: item.thumbnail}}  />
            <View style={styles.titleSection}>
              <Text
               style={styles.titleText} 
              // numberOfLines={1}
              >{ item.title }</Text>
            </View>
        </View>
      </TouchableOpacity>
    )

  }

}

export default AudioItem
