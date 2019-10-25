
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
    flex: 1,
    width: width,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#000000'
  },
  mainContainer: {
    flex: 1,
    width: width,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  itemContent: {
    flex: 1,
    width: width
  },
  playerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: normalize(30),
    paddingBottom: normalize(30)
  },
  topImage: {
    width: '100%',
    height: '100%'
  }
})


export default styles