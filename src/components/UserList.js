import React, { Component, PropTypes } from 'react'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const UserList = ({name, users, id, onClick, selectedUser, unread}) => (
  <List defaultValue={1} style={{backgroundColor: '#00838F', minWidth: 150}}>
    <ListItem
      disabled
      value={id}
      key={id}
      primaryText={name}
      leftAvatar={<Avatar src="static/missing_avatar.png"/>}
    />
    <br/>
    <Divider />
    {users.length > 1
      ? <Subheader>Online users</Subheader>
      : <Subheader>No users online</Subheader>
    }
    {users.filter(user => user.id !== id)
      .map((user) =>
      <ListItem
        style={selectedUser === user.id ? {backgroundColor: '#00ACC1'} : {}}
        className={selectedUser === user.id ? 'active' : ''}
        onClick={e => onClick(user.id)}
        value={user.id}
        key={user.id}
        primaryText={user.name}
        leftAvatar={<Avatar src="static/missing_avatar.png"/>}
        rightIcon={ unread[user.id] > 0 ? <CommunicationChatBubble style={{fill: '#FF4081'}}/> : <span/>}
      />
    )}
  </List>
)

export default UserList