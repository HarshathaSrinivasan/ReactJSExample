import React, { Component } from "react";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

class AddUser extends Component {
  state = {
    userName: "",
    company: "",
    location: ""
  };

  addUser = e => {
    e.preventDefault();
    const newUser = {
      id: 3,
      name: this.state.userName,
      location: this.state.location,
      company: this.state.company
    };
    this.props.addUser(newUser);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form>
        <br></br>
        <div>
          <InputLabel>Username:</InputLabel>
          <Input
            id = "name"
            type="text"
            value={this.state.userName}
            onChange={this.onChange}
            name="userName"
          />
        </div>
        <br></br>
        <div>
        <InputLabel>Company</InputLabel>
          <Input
            type="text"
            value={this.state.company}
            onChange={this.onChange}
            name="company"
            
          />
        </div>
        <br></br>
        <div>
        <InputLabel>Location</InputLabel>
          <Input
            type="text"
            value={this.state.location}
            onChange={this.onChange}
            name="location"
            
          />
        </div>
        <br></br>
        <div>
          <Button variant="contained" color="primary" onClick={e => this.addUser(e)}>Submit</Button>
        </div>
      </form>
    );
  }
}

export default AddUser;
