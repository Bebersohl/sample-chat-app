import { connect } from 'react-redux'
import Main from '../components/Main'

const mapStateToProps = ({name, sticker}, ownProps) => {
  return {
    name,
    sticker,
    socket: ownProps.socket,
  }
}

const MainContainer = connect(
  mapStateToProps,
)(Main)

export default MainContainer