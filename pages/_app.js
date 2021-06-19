import React from 'react'
import App  from 'next/app'
import Head from 'next/head'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import wrapper from '../src/store'
import { createMuiTheme } from '@material-ui/core/styles'
import cookie from 'js-cookie'

class _App extends App {

  constructor(props) {
    super(props);    
    this.state = {
      theme: createMuiTheme({
        palette: {
          type: cookie.get("darkmode") === 'true' ? 'dark' : 'light'
        }
      })
    }
    console.log('cookies>', cookie.get("darkmode") === 'true' ? 'dark' : 'light')

  }

  static async getInitialProps ({ Component, ctx }) {
    // this.state.theme.palette.type
    // this.state.theme.palette.type = 'light'
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        pathname: ctx.pathname,
      }
    }
  }

  componentDidMount () {


    
    // this.state.darkMode = cookie.get("darkmode") == 'true' ? 'dark' : ''

    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const {
      Component,
      pageProps,
    } = this.props

    return (
      <MuiThemeProvider theme={this.state.theme}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <meta name="theme-color" content={this.state.theme.palette.primary.main} />
          <title>SaleApp</title>
        </Head>
        <CssBaseline />
        <Component {...pageProps}/>
      </MuiThemeProvider>
    )
  }
}

export default wrapper.withRedux(_App)
