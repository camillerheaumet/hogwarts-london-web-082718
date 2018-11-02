import React, { Component } from 'react'
import Pig from './Pig'


class PigsContainer extends Component {



  // this.props.pigs

  render() {
    const { pigs, filteredPigs } = this.props
    return (
      <div className="ui grid container">
        {!pigs.filter ? 
          pigs.map(pig => <Pig pig={pig} />)
          :
          filteredPigs.map(pig => <Pig pig={pig} key={pig.name} />)
        }
      </div>
    )
  }


} 

export default PigsContainer;