
import {
  StyleSheet,
  Dimensions
} from 'react-native'

import {
  normalize
} from '../../helpers'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#42c000'
  },
  logoImage: {
    width: normalize(40) * 1243 / 927,
    height: normalize(40)
  },
  titleText: {
    fontSize: normalize(20),
    color: '#ffffff',
    fontWeight: 'bold'
  },
  titleImage: {
    width: normalize(128),
    height: normalize(24)
  },
  logoSection: {
    flex: 1,
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(5),
    alignItems: 'flex-start'
  },
  menuSection: {
    flex: 1,
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(5),
    alignItems: 'flex-end'
  },
  titleSection: {
    flex: 4,
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(5),
    alignItems:'center',
    // backgroundColor: '#e2e200'
  },
  menuIcon: {
    width: normalize(30),
    height: normalize(30)
  }
})


export default styles