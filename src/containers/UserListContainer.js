import { connect } from 'react-redux'
import UserList from '../components/UserList'
import { setSelectedUser } from '../actions'

const mapStateToProps = ({name, users, id, selectedUser}) => {
  return {
    name,
    users,
    id,
    selectedUser,
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