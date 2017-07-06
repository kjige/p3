import React from 'react';

class Saved extends React.Component {
  render () {
    let things = this.props.saved.map((elem,i)=>{
        // if (elem[i]) {
          return (
            <div key={i} className="col-xs-6 well text-center">
              <h6>{elem.artist}</h6>
              <h6>{elem.title}</h6>
              <button value={elem._id} onClick={()=>this.props.delete(elem._id)}></button>
            </div>
          )
        // }
      })
    return (
      <div>
        {things}
        {console.log(this.props.saved)}
      </div>
    )
  }

    
  }


export default Saved;