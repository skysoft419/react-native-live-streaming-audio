import React from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'


import styles from './style'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    const { navigation, title } = this.props

    return(
      <View style={styles.container}>
        <View style={styles.logoSection}>
          <Image style={styles.logoImage} source={require('../../assets/images/logo.png')} />
        </View>
        <View style={styles.titleSection}>
          <Text style={styles.titleText} numberOfLines={1}>{ title }</Text>
        </View>
        <View style={styles.menuSection}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={styles.menuIcon} source={require('../../assets/icons/list.png')} />
          </TouchableOpacity>
        </View>
      </View>
    )

  }

}

export default Header