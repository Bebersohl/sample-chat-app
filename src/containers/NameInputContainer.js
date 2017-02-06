import { connect } from 'react-redux'
import { setName } from '../actions'
import NameInput from '../components/NameInput'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: name => {
      if(name) {
        dispatch(setName(name))
      }
    }
  }
}

const NameInputContainer = connect(
  null,
  mapDispatchToProps,
)(NameInput)

export default NameInputContainer