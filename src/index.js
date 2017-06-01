import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import './index.css';

class Game extends React.Component {
  
  constructor(){
    super();
    this.state = {
      count: 0,
    }
  }

  handleClick(){
    this.setState({
      count: this.state.count+1
    });
  }

  render() {

    return (
      <div>
        <div className="row">       
          <div className="col-xs-4 col-xs-offset-4 text-center">

            <Button bsStyle="primary" onClick={this.handleClick.bind(this)}>Primary</Button>

            <h1>{this.state.count}</h1>

          </div>
          <div className="col-xs-3 text-center">

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
