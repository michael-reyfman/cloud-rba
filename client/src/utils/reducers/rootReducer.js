const initialState = {
  authorized: false,
  login: null,
  password: null,
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {...state, authorized: true, login: action.payload.login, password: action.payload.password}
    case 'LOGOUT':
      return {...state, authorized: false, login: null, password: null}
    default:
      return state
  }
}

export default rootReducer
