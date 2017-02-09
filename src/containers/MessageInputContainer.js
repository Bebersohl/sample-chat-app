import { connect } from 'react-redux'
import MessageInput from '../components/MessageInput'
import { sendMessage } from '../actions'

const mapStateToProps = ({selectedUser}, ownProps) => {
  return {
    selectedUser,
    socket: ownProps.socket,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    printMessage: ({message, to}) => {
      dispatch(sendMessage({
        from: ownProps.socket.id,
        to,
        message,
      }))
    }
  }
}

const MessageInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageInput)

export default MessageInputContainer