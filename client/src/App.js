import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Params from './components/Params'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(values) {
    console.log(values)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Params />
        <Form onSubmit={this.submit}/>
      </div>
    );
  }
}

export default App;
