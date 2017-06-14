import React from 'react';

class Saved extends React.Component {
  render () {
    return (
      <div>
      {this.props.saved.map((elem,i)=>{
        return(
          <div key={i} className="col-xs-6 well text-center">
            <h6>{elem.count}</h6>
            <h6>{elem.value}</h6>
            <button value={elem.count + elem.value} onClick={this.props.makeSlide}></button>
          </div>
        )
      })}
      </div>
    )
  }
}

export default Saved;