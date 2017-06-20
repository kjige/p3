import React from 'react';

class Saved extends React.Component {
  render () {
    return (
      <div>
      {this.props.saved.map((elem,i)=>{
        return(
          <div key={i} className="col-xs-6 well text-center">
            <h6>{elem.artist}</h6>
            <h6>{elem.title}</h6>
            <button value={elem._id} onClick={(e)=>this.props.delete(elem._id)}></button>
          </div>
        )
      })}
      </div>
    )
  }
}

export default Saved;