import { connect } from 'react-redux'
import Main from '../components/Main'

const mapStateToProps = ({name}, ownProps) => {
  return {
    name,
    socket: ownProps.socket,
  }
}

const MainContainer = connect(
  mapStateToProps,
)(Main)

export default MainContainer