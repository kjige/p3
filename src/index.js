import React from 'react';
import ReactDOM from 'react-dom';
import {Button, FormControl, ControlLabel, FormGroup, HelpBlock, Jumbotron} from 'react-bootstrap';
import './index.css';
// var axios = require("axios");
import axios from 'axios';

class Game extends React.Component {
  
  constructor(){
    super();
    this.state = {
      count: 0,
      value: '',
      entry: [],
    }
  }

  handleClick(){
    this.setState({
      count: this.state.count+1
    });
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    let newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  }

  handleSave() {
    this.setState({
      entry: {
        value: this.state.value,
        count: this.state.count,
      }
    })
    this.postSave();
  }

  postSave() {
    let newSave = {
      value: this.state.value,
      count: this.state.count
    }
    return axios.post("/api/save", newSave)
      .then(function(res){
        return res;
      })
  }

  render() {

    return (
      <div>

        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>

        <div className="row">
          <div className="col-xs-4">

            <Button bsStyle="primary" onClick={this.handleClick.bind(this)} block>Primary</Button>

            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}>
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type="text"
                  id="value"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange.bind(this)} />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </FormGroup>
            
              <Button bsStyle="primary" onClick={this.handleSave.bind(this)} block>Save</Button>
            
            </form>
          </div>
          <div className="col-xs-4 text-center well">  
            <h1>{this.state.count}</h1>
            <h1>{this.state.value}</h1>
          </div>
        </div> 
        
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
