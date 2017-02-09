import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

const mapStateToProps = ({selectedUser, users}) => {
  return {
    selectedUser,
    users,
  }
}

const MessageListContainer = connect(
  mapStateToProps,
)(MessageList)

export default MessageListContainer