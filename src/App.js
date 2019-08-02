import React from "react";
import AddUser from "./AddUser"
import Display from "./Display";
import Footer from "./Footer";

import "./styles.css";
import Header from "./Header";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
  state = {
    user: [
      {
        id: 1,
        name: "Ax",
        company: "Deloitte",
        location: "Mumbai"
      },
      {
        id: 2,
        name: "Bx",
        company: "Deloitee",
        location: "Delhi"
      }
    ]
  };
  deleteData = id => {
    console.log("reached");
    const userState = [...this.state.user];
    const updatedUserData = userState.filter(data => data.id !== id);
    this.setState({
      user: updatedUserData
    });
  };

  addUser = data => {
    const newData = [...this.state.user, data];
    this.setState({
      user: newData
    });
  };
  render() {
    return (
      <div className="App">
       <Header id="header"/>
       <div>
       <Card className="top_div">
       <CardContent>
       <Typography variant="h5" component="h2">
            Enter Details
       </Typography>
       <AddUser addUser={this.addUser} />
       </CardContent>
       </Card>

       <Card className="mid_div">
       <CardContent>
       <Typography variant="h5" component="h2">
            Display Details
       </Typography>
       <Display userData={this.state.user} deleteRecord={this.deleteData} />
       </CardContent>
       </Card>
       
       </div>
        <Footer id="footer"/>
   
      </div>
    );
  }
}

export default App;
