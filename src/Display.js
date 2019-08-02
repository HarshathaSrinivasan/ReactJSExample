import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <ul>
        {this.props.userData.map(userd => (
          <li>
            <span>{userd.name}</span>
            <span>{userd.location}</span>
            <span>{userd.company}</span>
            <input
              type="submit"
              value="delete"
              onClick={() => this.deleteRecord(userd.id)}
            />
          </li>
        ))}
      </ul>
    );
  }

  deleteRecord = id => {
    console.log(id);
    this.props.deleteRecord(id);
  };
}
export default Display;
