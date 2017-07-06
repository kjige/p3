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
  
  componentWillMount(){
    this.state = {
      count: 0,
      value: '',
      saved: [],
      lyrics: '',
      artist: '',
      title: '',
      recentSaved: '',
      recentDelete: ''
    }
  }

  scrape(e){
    console.log({
      "artist":this.state.artist, 
      "title":this.state.title
    });

  }

  makeSlides() {
      slide.addText(
        'TEST',
        { x:0.0, y:0.25, w:'100%', h:1.5, align:'c', font_size:24, color:'0088CC', fill:'F1F1F1' }
      );
    
  pptx.save('React-slide-test');
  }

  componentDidMount(){
    this.getSaved();
  }

  // componentDidUpdate(){
  //   this.getSaved();
  // }

  getSaved(){
    console.log('HIT');
    return axios.get("api/save")
      .then((res)=>{
        this.setState({
          saved:res.data
        });
      })
  }

  handleChange(e) {
    let newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  }

  postSave() {
    let newSave = {
      artist: this.state.artist,
      title: this.state.title
    }
    axios.post("/api/save", newSave)
      .then(function(res){
        return res;
      });
    this.getSaved();
  }

  delete(e) {
    axios.post("api/delete", {"_id": e})
      .then(function(res){
        return res;
      });
    this.getSaved();
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

            <form>
              <FormGroup>
                <ControlLabel>Song Title</ControlLabel>
                <FormControl
                  type="text"
                  id="title"
                  value={this.state.title}
                  placeholder="Enter song title"
                  onChange={this.handleChange.bind(this)} />
                <FormControl.Feedback />

              </FormGroup>
            
              <Button bsStyle="primary" id="artist" value="hillsong" onClick={this.handleChange.bind(this)} block>Hillsong</Button>
              <Button bsStyle="primary" id="artist" value="bethel" onClick={this.handleChange.bind(this)} block>Bethel</Button>
              <Button bsStyle="primary" onClick={this.postSave.bind(this)} block>Save</Button>
            </form>

          </div>
        </div>

        <div className="row">
          <div className="col-xs-4 text-center">  
            <div className="well">
              <h1>{this.state.artist}</h1>
              <h1>{this.state.title}</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-4">
            <Saved saved={this.state.saved} delete={this.delete}/>
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
