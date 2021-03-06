
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
  }
})


export default styles