import React from 'react'
import { Paper, Button } from '@material-ui/core'

export default function BloodParams(props) {
  const { params, toggle } = props
  return(
    <Paper>
      {
        params.map(param => (
          <Button color="primary" disabled={param.selected} onClick={() => toggle(param.id)}>
            {param.title}
          </Button>
        ))
      }
    </Paper>
  )
}
