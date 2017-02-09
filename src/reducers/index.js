import { SET_NAME, SET_ID, SET_USERS, SET_SELECTED_USER, RECIEVE_MESSAGE, SEND_MESSAGE } from '../actions'

const initialState = {
  name: '', 
  users:[],
  selectedUser: null,
  conversations: {},
  sticker: false,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let conversation;
      if(state.conversations.hasOwnProperty(action.to)){
        conversation = [
          ...state.conversations[action.to],
          {
            to: action.to,
            from: action.from,
            timestamp: action.timestamp,
            message: action.message,
          },
        ]
      } else {
        conversation = [
          {
            to: action.to,
            from: action.from,
            timestamp: action.timestamp,
            message: action.message,
          }
        ]
      }
      return {
        ...state,
        conversations: {
          ...state.conversations,
          [action.to]: conversation
        }
      }
    }
    case RECIEVE_MESSAGE: {
      let conversation;
      let sticker;
      if(action.message.includes('<sticker>')){
        sticker = true;
      }
      if(action.message.includes('</sticker>')){
        sticker = false;
      }
      if(state.conversations.hasOwnProperty(action.from)){
        conversation = [
          ...state.conversations[action.from],
          {
            to: action.to,
            from: action.from,
            timestamp: action.timestamp,
            message: action.message,
          },
        ]
      } else {
        conversation = [
          {
            to: action.to,
            from: action.from,
            timestamp: action.timestamp,
            message: action.message,
          }
        ]
      }
      return {
        ...state,
        sticker: typeof sticker === 'boolean' ? sticker : state.sticker,
        conversations: {
          ...state.conversations,
          [action.from]: conversation
        }
      }
    }
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