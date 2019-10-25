
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
    width: width,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0, 0.9)'
  },
  mainContainer: {
    flex: 1,
    width: width,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  titleText: {
    margin: normalize(30),
    fontSize: normalize(20),
    color: '#ffffff'
  },
  descriptionText: {
    marginHorizontal: normalize(30),
    marginBottom: normalize(30),
    color: '#ffffff'
  }
})


export default styles