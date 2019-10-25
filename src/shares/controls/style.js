
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
    justifyContent: 'center',
    paddingTop: normalize(10),
  },
  playButton: {
    height: normalize(80),
    width: normalize(80),
    borderWidth: normalize(2),
    borderColor: 'white',
    borderRadius: normalize(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryControl: {
    height: normalize(25),
    width: normalize(25),
  },
  secondaryControl: {
    height: normalize(20),
    width: normalize(20),
  },
  off: {
    opacity: 0.30,
  },
  width40: {
    width: normalize(40)
  },
  width20: {
    width: normalize(20)
  },
})


export default styles
