import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'

export default function Home() {
  return(
    <Fragment>
      <Typography variant="p">
        Lorem ipsum dolor sit amet xdxdxd
      </Typography>
      <Typography variant="p">
        Also, you need to be authorized in order to fill the form or view the results
      </Typography>
      <Link to="/auth">Authorize</Link>
    </Fragment>
  )
}