import React, { Component } from 'react';
import { InputField } from './StyleComponent/InputField';

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
          fliter: ''
        };

    this.handleChange=(e) => {
      this.setState({fliter: e.target.value.substr(0,20)});
    }
        ;
    // this.handleSubmit = this.handleSubmit.bind(this);
    console.log("****** inside search component********************");
    }
        render() {
          return (
            <div style={{ textAlign: "center", marginTop:"30px" }}>

            <form margin-left='50px'>
              <InputField
                type="text"
                placeholder="Search..."
                value={this.props.filterText}
                ref="filterTextInput"
                onChange={this.handleChange}
                size='75'
              />
            </form>
            </div>
          );
        }
    } 
