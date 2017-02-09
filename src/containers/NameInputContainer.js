import { connect } from 'react-redux'
import { setName } from '../actions'
import NameInput from '../components/NameInput'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: name => {
      if(name) {
        dispatch(setName(name))
        ownProps.socket.emit('set name', name)
      }
    }
  }
}

const NameInputContainer = connect(
  null,
  mapDispatchToProps,
)(NameInput)

export default NameInputContainer