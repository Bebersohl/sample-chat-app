import { connect } from 'react-redux'
import Main from '../components/Main'

const mapStateToProps = ({name}) => {
  return {
    name,
  }
}

const MainContainer = connect(
  mapStateToProps,
)(Main)

export default MainContainer