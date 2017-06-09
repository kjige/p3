import React from 'react';

class Saved extends React.Component {
  render () {
    return (
      <div>
      {this.props.saved.map(function(elem,i){
        return(
          <div key={i} className="col-xs-6 well text-center">
            <h6>{elem.count}</h6>
            <h6>{elem.value}</h6>
          </div>
        )
      })}
      </div>
    )
  }
}

export default Saved;