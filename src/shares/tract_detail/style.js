
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
    paddingLeft: normalize(20),
    alignItems: 'center',
    paddingRight: normalize(20),
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  artist: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: normalize(14),
    marginTop: normalize(5),
  },
  button: {
    width: normalize(30),
    height: normalize(30),
    opacity: 0.72,
  },
  moreButton: {
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: normalize(2),
    opacity: 0.72,
    borderRadius: normalize(15),
    width: normalize(30),
    height: normalize(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButtonIcon: {
    height: normalize(20),
    width: normalize(20),
  }
})


export default styles