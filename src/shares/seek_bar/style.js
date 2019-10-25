
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
    paddingLeft: normalize(15),
    paddingRight: normalize(15),
    paddingTop: normalize(15),
    width: width
  },
  flexDirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: normalize(15)
  },
  slider: {
    marginTop: normalize(-15),
  },
  track: {
    height: normalize(3),
    borderRadius: normalize(3),
  },
  thumb: {
    width: normalize(15),
    height: normalize(15),
    borderRadius: normalize(15),
    backgroundColor: 'white',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: normalize(14),
    textAlign:'center',
  },

})


export default styles
