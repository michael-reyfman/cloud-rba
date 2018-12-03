import Params from './Params'
import { connect } from 'react-redux'
import { toggle } from "../../utils/paramsReducer"

const mapStateToProps = state => ({
  params: state.params
})

const mapDispatchToProps = dispatch => ({
  toggle: id => dispatch(toggle(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Params)
