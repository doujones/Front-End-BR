import React, { Component } from 'react'

class InfoBox extends Component{
  state= {
    words: ''
  }
  
  render(){
  return (
  <div className="ui segment">
  <form className="ui form">
  <div className="field">
  <label>Picture Search</label>
  <input
  type="text"
  value={this.state.words}
  onChange={(e) => this.setState({words: e.target.value})}
  />
  </div>
  </form>
  </div>
)
}
}
export default InfoBox

// Add Semantic UI by adding the Minified Version CSS