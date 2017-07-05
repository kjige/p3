import React from 'react';

class Saved extends React.Component {
  render () {
    return (
      <div>
      {this.props.saved.map((elem,i)=>{
        return(
          <div key={i} className="col-xs-6 well text-center">
            <h6>{elem[i].artist}</h6>
            <h6>{elem[i].title}</h6>
            <button value={elem[i]._id} onClick={(e)=>this.props.delete(elem[i]._id)}></button>
          </div>
        )
      })}
      </div>
    )
  }
}

export default Saved;