import React from 'react'
import makeStyles  from '@material-ui/styles/makeStyles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Fab from '@material-ui/core/Fab'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import { connect } from 'react-redux'
import { set_data } from '../src/actions'
import { bindActionCreators } from 'redux'
import cookie from 'js-cookie'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 14
  }
})

const Index = (props) => {

  console.log(props);

  const classes = useStyles()
  const [darkMode, setDarkMode] = React.useState(true)

  const toggleColorTheme = () => {

    set_data({
      type: 'SET_DATA',
      darkMode: !cookie.get("darkmode")==='true'
    })

    if(cookie.get("darkmode"))
      return cookie.set("darkmode", cookie.get("darkmode")==='true' ?  "false" : "true")
    console.log('2');
    return cookie.set("darkmode", "false")
  }

  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Link href="/login">Login</Link>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            Done {darkMode ? "Dark" : "Default"}
          </Typography>
        </CardContent>
        <CardActions>
          <Fab
            variant='round'
            color='primary'
            size='small'
            onClick={toggleColorTheme}
          >
            <Brightness4Icon />
          </Fab>
        </CardActions>
      </Card>
    </>
  )
}

Index.getInitialProps = ({ store }) => {
  return {}
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators({ set_data }, dispatch) })
)(Index)
