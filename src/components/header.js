import { AppBar, Typography, Toolbar, Button } from "@material-ui/core"

const Header = () => {
  return(
    <AppBar position="static" color="header">
      <Toolbar>
        <Typography variant="h6">
      AIwear
        </Typography>
      </Toolbar>
    </AppBar>
  )
}


export default Header