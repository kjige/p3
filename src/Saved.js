import React from 'react';

class Saved extends React.Component {

  delete(id) {
    this.props.delete(id);
    this.props.getSaved();
  }

  render () {
    let things = this.props.saved.map((elem,i)=>{
        // if (elem[i]) {
          return (
            <div key={i} className="col-xs-6 well text-center">
              <h6>{elem.artist}</h6>
              <h6>{elem.title}</h6>
              <button value={elem._id} onClick={()=>this.delete(elem._id)}>Delete</button>
            </div>
          )
        // }
      })
    return (
      <div>
        {things}
      </div>
    )
  }

    
  }


export default Saved;