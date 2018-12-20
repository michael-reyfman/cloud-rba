import React from 'react'
import { Route } from 'react-router-dom'
// import PrivateRoute from './utils/PrivateRoute'

import './App.css'

import Home from './components/Home'
import Auth from './components/Auth'
import Header from './components/Header'
import Form from './components/Form'
import axios from "axios";

class RoutedApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    console.log(values)
    console.log('submitting')
    axios.post('/api/postData', values)
      .then(res => console.log(res))
      .catch(e => console.error(e))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/app" render={props => <Form {...props} onSubmit={this.handleSubmit} />} />
      </div>
    )
  }
}

export default RoutedApp
