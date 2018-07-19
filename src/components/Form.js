import React, { Component } from "react";
import uuidv1 from "uuid";
import { Button, Input } from 'reactstrap';

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value , title: event.target.value});
  }

  handleSubmit(event) {
    console.log("Inside handle submmit");
    console.log("******************", this.props);
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="listing" id="form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Input 
            placeholder="Enter any string"
            type="text"
            className="form-control"
            id="textInput"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <Button color="info" type="submit" className="btn btn-success btn-lg" id="savedBtn">
          SAVE
        </Button>
      </form>
    );
  }
}
export default ConnectedForm;

