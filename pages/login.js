import React from 'react'
import makeStyles  from '@material-ui/styles/makeStyles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import { connect } from 'react-redux'
import { set_data } from '../src/actions'
import { bindActionCreators } from 'redux'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 14
  }
})

const Index = ({
  value,
  from,
  action,
  actions: {
    set_data
  }
}) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent>
        <Link href="/">Home</Link>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
        </Typography>
        <Typography variant='h3' component='h2'>
          {value}
        </Typography>
        <Typography color='textSecondary'>{action}</Typography>
      </CardContent>
      <CardActions>
        <Fab
          variant='round'
          color='primary'
          size='small'
          onClick={() => set_data({value:10})}
        >
          <AddIcon />
        </Fab>
        <Fab
          variant='round'
          color='secondary'
          size='small'
          onClick={() => set_data({value:20})}
        >
          <RemoveIcon />
        </Fab>
      </CardActions>
    </Card>
  )
}

Index.getInitialProps = ({ store }) => {
  store.dispatch({
    type: 'SET_DATA'
  })

  return {}
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators({ set_data }, dispatch) })
)(Index)
