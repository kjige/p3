import React from 'react';
import ReactDOM from 'react-dom';
import {Button, FormControl, ControlLabel, FormGroup, HelpBlock, Jumbotron} from 'react-bootstrap';
import axios from 'axios';
import Saved from "./Saved";
import './index.css';
import './ppt.js';
const pptx = require('pptxgenjs');
// const pptx = new PptxGenJS();
const slide = pptx.addNewSlide();

class Game extends React.Component {
  
  constructor(){
    super();
    this.state = {
      count: 0,
      value: '',
      saved: []
    }
  }

  makeSlides() {
      slide.addText(
        'TEST',
        { x:0.0, y:0.25, w:'100%', h:1.5, align:'c', font_size:24, color:'0088CC', fill:'F1F1F1' }
      );
    
  pptx.save('React-slide-test');
  }

  componentDidMount(){
    this.getSaved()
  }

  componentDidUpdate(){
    this.getSaved()
  }

  getSaved(){
    return axios.get("api/save")
      .then((res)=>{
        this.setState({
          saved:res.data
        })
      })
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

  // handleSave() {
  //   this.setState({
  //     entry: {
  //       value: this.state.value,
  //       count: this.state.count,
  //     }
  //   })
  //   this.postSave();
  // }

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
            
              <Button bsStyle="primary" onClick={this.postSave.bind(this)} block>Save</Button>
            
            </form>
          </div>
          <div className="col-xs-4 well text-center">  
            <h1>{this.state.count}</h1>
            <h1>{this.state.value}</h1>
          </div>
          <div className="col-xs-4">
            <Saved saved={this.state.saved} makeSlide={this.makeSlides}/>
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
