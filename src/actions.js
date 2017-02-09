export const SET_NAME = 'SET_NAME'
export const SET_USERS = 'SET_USERS'
export const SET_ID = 'SET_ID'
export const SET_SELECTED_USER = 'SET_SELECTED_USER'
export const RECIEVE_MESSAGE = 'RECIEVE_MESSAGE'

export const recieveMessage = ({from, message}) => ({
  type: RECIEVE_MESSAGE,
  from,
  message,
  timestamp: Date.now(),
})

export const setName = name => ({
  type: SET_NAME,
  name,
})

export const setId = id => ({
  type: SET_ID,
  id,
})

export const setUsers = users => ({
  type: SET_USERS,
  users,
})

export const setSelectedUser = id => ({
  type: SET_SELECTED_USER,
  id,
})