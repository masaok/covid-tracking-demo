import React from 'react'
// import logo from './logo.svg'
import './App.css'
// import SimpleLineChart from './examples/SimpleLineChart'
// import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
// import { ThemeProvider } from '@material-ui/styles'
import Hello from './pages/Hello'

import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch
} from 'react-router-dom'

// const theme = createMuiTheme({})

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     margin: theme.spacing(1)
//   }
// }))

// const classes = useStyles(props)

function App() {
  return (
    <div className="App">
      <Router>
        {/* <div className={classes.root}> */}
        <div>
          <Switch>
            <Route exact path="/" component={Hello} />
            <Route exact path="/coronavirus/:state" component={Hello} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
