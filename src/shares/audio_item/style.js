
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
    width: width/2.4,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // paddingHorizontal: normalize(10),
    // paddingVertical: normalize(10),
    borderBottomWidth: normalize(0.5),
    borderBottomColor: '#646666',
    margin: normalize(10),
    backgroundColor:'white',
    borderTopRightRadius: 25,
    overflow: 'hidden', 
    marginLeft: (width - 2*width/2.5 - 4*normalize(10))/2,

  },
  audioIcon: {
    width: (width)/2.4,
    height: width/2,
    margin: 0,
    padding: 0,
    borderTopRightRadius: 25,
    },
  titleSection: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop:normalize(3),
    margin: normalize(10)

  },
  titleText: {
    fontSize: normalize(14),
    color: '#E5E510',
    textAlign: 'left',
    margin: normalize(10),
    marginTop:normalize(3),
    marginBottom:0,
  },
  playIcon: {
    width: normalize(30),
    height: normalize(30),
    marginLeft: normalize(10)
  }
})


export default styles