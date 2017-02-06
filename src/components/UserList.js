import React from 'react'
import {List, ListItem, makeSelectable} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader';

const UserList = () => (
  <div style={{backgroundColor: '#00838F'}}>
    <List>
      <Subheader>Online Users</Subheader>
      <ListItem
        value={1}
        primaryText="Grace Ng"
        leftAvatar={<Avatar src="static/missing_avatar.png"/>}
      />
      <ListItem
        value={2}
        primaryText="Grace Ng"
        leftAvatar={<Avatar src="static/missing_avatar.png"/>}
      />
    </List>
  </div>
)

export default UserList