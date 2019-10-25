import React from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native'


import styles from './style'


class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.navigateTo = this.navigateTo.bind(this)
  }

  navigateTo(screen) {
    this.props.navigation.navigate(screen)
    this.props.navigation.closeDrawer()
  }

  render() {

    return(
      <ImageBackground style={styles.backImage} source={require('../../assets/images/menuBack.jpg')}>
        <View style={styles.container}>
          <View style={styles.logoItem}>
            <Image style={styles.logoImage} source={require('../../assets/images/logo.png')} />
            <Text style={styles.titleText}>Kerala FM</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.menuContainer}>
            <View style={styles.menuContent}>
              <View style={styles.navItem}>
                <TouchableOpacity onPress={() => this.navigateTo('LivePlay')}>
                  <Text style={styles.navText}>Live Player</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.navItem}>
                <TouchableOpacity onPress={() => this.navigateTo('PlayList')}>
                  <Text style={styles.navText}>Play List</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.navItem}>
                <TouchableOpacity onPress={() => this.navigateTo('TopChart')}>
                  <Text style={styles.navText}>Top Charts</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.navItem}>
                <TouchableOpacity>
                  <Text style={styles.navText}>Rate the App</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.navItem}>
                <TouchableOpacity onPress={() => this.navigateTo('TermsConditions')}>
                  <Text style={styles.navText}>Terms & Conditions</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.navItem}>
                <TouchableOpacity onPress={() => this.navigateTo('AboutCompany')}>
                  <Text style={styles.navText}>About Company</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    )

  }

}

export default Menu