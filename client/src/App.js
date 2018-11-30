import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
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
        <Form onSubmit={this.submit}/>
      </div>
    );
  }
}

export default App;
