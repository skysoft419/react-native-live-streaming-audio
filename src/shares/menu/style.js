
import {
  StyleSheet,
  Dimensions
} from 'react-native'

import {
  normalize
} from '../../helpers'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  backImage: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    width: width * 2 / 3,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0, 0.5)'
  },
  logoItem: {
    padding: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logoImage: {
    width: normalize(40) * 1243 / 927,
    height: normalize(40),
    marginRight: normalize(10)
  },
  titleItem: {
    padding: normalize(10),
    alignItems: 'flex-start'
  },
  titleText: {
    fontSize: normalize(22),
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  divider: {
    height: normalize(1),
    width: width * 2 / 3,
    backgroundColor: '#ffffff'
  },
  navItem: {
    paddingLeft: normalize(10),
    paddingRight: normalize(10),
    paddingTop: normalize(30)
  },
  navText: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'left'
  },
  menuContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  menuContent: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
})


export default styles