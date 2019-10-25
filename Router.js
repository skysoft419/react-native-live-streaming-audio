import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Dimensions
} from 'react-native'

import { createAppContainer } from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import {
  PlayList,
  Play,
  TopChart,
  AboutCompany,
  TermsConditions,
  LivePlay
} from './src/screens'

import {
  Menu
} from './src/shares'


const { width } = Dimensions.get('window')


const DrawerScreens = {
  LivePlay: { screen: LivePlay },
  PlayList: { screen: PlayList },
  Play: { screen: Play },
  TopChart: { screen: TopChart },
  AboutCompany: { screen: AboutCompany },
  TermsConditions: { screen: TermsConditions }
}

const DrawerStack = createDrawerNavigator(DrawerScreens, {
  drawerWidth: width * 2 / 3,
  drawerPosition: 'right',
  contentComponent: Menu
})








const AppNavigator = createStackNavigator({
  Drawer: {
    name: 'Drawer',
    screen: DrawerStack,
  }
}, {
  mode: 'modal',
  headerMode: 'none',
})
const AppContainer = createAppContainer(AppNavigator)



const mapDispatchToProps = (dispatch) => {
  return ({
  })
}

const mapStateToProps = (state) => {
  return ({
  })
}


class Router extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <AppContainer />
    )
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Router)