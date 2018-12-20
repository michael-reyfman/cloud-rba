import React from 'react'
import { withRouter } from 'react-router'
import { Button } from '@material-ui/core'

function Auth (props) {
  const auth = () => {
    props.authorized ? props.logout() : props.authorize()
    props.history.push('/app')
  }

  return(
    <Button
      variant="contained"
      color="primary"
      onClick={auth}
    >
        {props.authorized ? 'Logout' : 'Login'}
    </Button>
  )
}

export default withRouter(Auth)