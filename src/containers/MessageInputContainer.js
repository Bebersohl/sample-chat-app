import { connect } from 'react-redux'
import MessageInput from '../components/MessageInput'

const mapStateToProps = ({selectedUser}, ownProps) => {
  return {
    selectedUser,
    socket: ownProps.socket,
  }
}

const MessageInputContainer = connect(
  mapStateToProps,
)(MessageInput)

export default MessageInputContainer