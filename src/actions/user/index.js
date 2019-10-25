import firebase from 'react-native-firebase'

import { USER, COMMON } from '../../configs/types'
import API from '../api'
import { storeAsyncToken, getAsyncToken,removeAsyncToken } from '../token'



export const checkAuthStatus = () => {
  return (dispatch) => {
    return getAsyncToken().then(token => {
      if (token) {
        dispatch({
          type: USER.SIGNED_IN,
          payload: {
            token: token
          }
        })
        return token
      }
    })
  }
}


export const getPlayList = () => {
  return (dispatch) => {
    firebase.database().ref('playlist/').once('value', snapshot => {
      let data = snapshot.val()
      let tempList = []
      for (key in data) {
        let temp = Object.assign({}, data[key])
        temp.id = key
        tempList.push(temp)
      }
      dispatch({
        type: USER.SET_PLAY_LIST,
        payload: {
          data: tempList
        }
      })
    })
  }
}

export const getAboutCompanyContent = () => {
  return (dispatch) => {
    firebase.database().ref('MasterData/').once('value', snapshot => {
      let data = snapshot.val()
      dispatch({
        type: USER.SET_ABOUT_COMPANY,
        payload: {
          data: data['aboutcompany']
        }
      })
    })
  }
}

export const setCurrentPlay = (item) => {
  return (dispatch) => {
    dispatch({
      type: USER.SET_CURRENT_PLAY,
      payload: {
        data: item
      }
    })
  }
}