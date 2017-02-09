import { SET_NAME, SET_ID, SET_USERS, SET_SELECTED_USER } from '../actions'

const initialState = {
  name: '', 
  users:[],
  selectedUser: null,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    // case RECIEVE_MESSAGE:
    //   return {
    //     ...state

    //   }
    case SET_ID:
      return {
        ...state,
        id: action.id
      }
    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.id
      }
    case SET_NAME:
      return {
        ...state,
        name: action.name
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    default:
      return state
  }
}

export default user