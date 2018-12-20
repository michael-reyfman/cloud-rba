import Auth from './Auth'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  authorized: state.root.authorized,
})

const mapDispatchToProps = dispatch => ({
  authorize: () => dispatch({
    type: 'LOGIN',
    payload: {login: 'penis', password: '#@)~?$0'},
  }),
  logout: () => dispatch({
    type: 'LOGOUT'
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
