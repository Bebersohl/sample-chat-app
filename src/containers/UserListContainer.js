import { connect } from 'react-redux'
import UserList from '../components/UserList'
import { setSelectedUser } from '../actions'

const mapStateToProps = ({name, users, id, selectedUser, unread}) => {
  return {
    name,
    users,
    id,
    selectedUser,
    unread,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: id => {
      dispatch(setSelectedUser(id))
    }
  }
}

const UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList)

export default UserListContainer