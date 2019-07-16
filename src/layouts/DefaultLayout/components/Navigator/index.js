import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const StyledToolbar = styled(Toolbar)`
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
`

const RightButtons = styled.div`
  grid-column-start: 3;
`

export default function Navigator() {
  return (
    <AppBar>
      <StyledToolbar>
        <Button color="inherit">Home</Button>
        <RightButtons>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
        </RightButtons>
      </StyledToolbar>
    </AppBar>
  )
}
