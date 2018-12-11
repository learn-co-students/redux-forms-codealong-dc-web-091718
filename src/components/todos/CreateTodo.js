import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor () {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    this.setState({text: event.target.valeu})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
    //Alternatively can be written like this
    // this.props.dispatch({type: "ADD_TODO", payload: this.state});
  }

  render() {
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value = {this.state.text}/>
          </p>
            <input type="submit" />
        </form>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: data => dispatch({type: "ADD_TODO", payload: data})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
// Can alternativelty be written like this
// export default connect()(CreateTodo);
