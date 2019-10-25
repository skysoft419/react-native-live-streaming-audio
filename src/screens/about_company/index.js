import React from 'react'
import {
  View,
  Text,
  ScrollView,
  ImageBackground
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Header
} from '../../shares'

import {
  commonActions,
  userActions
} from '../../actions'


import styles from './style'


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

    about_company_content: state.user.about_company_content
  })
}


class AboutCompany extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  componentDidMount() {
    this.props.userActions.getAboutCompanyContent()
  }

  render() {

    return(
      <ImageBackground style={styles.backImage} source={require('../../assets/images/background_info.png')}>
        <View style={styles.container}>
          <Header {...this.props} title={'About Company'} />
          <View style={styles.mainContainer}>
            <ScrollView>
              <Text style={styles.titleText}>About Company</Text>
              <Text style={styles.descriptionText}>
                This is from firebase realtime database. ----
                { this.props.about_company_content }
              </Text>
              <Text style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, ne qui dicit gloriatur, vim et natum altera dignissim. Doming cotidieque ut has, pri ei sumo quaeque, sit alterum theophrastus deterruisset te. Et accumsan facilisis cum, nec id aliquando honestatis. Cu sonet simul maiorum mea. Vel modo praesent te.
              </Text>
              <Text style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, ne qui dicit gloriatur, vim et natum altera dignissim. Doming cotidieque ut has, pri ei sumo quaeque, sit alterum theophrastus deterruisset te. Et accumsan facilisis cum, nec id aliquando honestatis. Cu sonet simul maiorum mea. Vel modo praesent te.
              </Text>
              <Text style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, ne qui dicit gloriatur, vim et natum altera dignissim. Doming cotidieque ut has, pri ei sumo quaeque, sit alterum theophrastus deterruisset te. Et accumsan facilisis cum, nec id aliquando honestatis. Cu sonet simul maiorum mea. Vel modo praesent te.
              </Text>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(AboutCompany)