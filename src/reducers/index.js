import { SET_NAME } from '../actions'

const user = (state = { name: ''}, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name
      }
    default:
      return state
  }
}

export default user