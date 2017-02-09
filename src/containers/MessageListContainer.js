import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

const mapStateToProps = ({selectedUser, users, conversations}) => {
  return {
    selectedUser,
    users,
    conversations,
  }
}

const MessageListContainer = connect(
  mapStateToProps,
)(MessageList)

export default MessageListContainer