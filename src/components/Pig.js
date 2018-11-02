import React, { Component } from 'react'



class Pig extends Component {

  state = {
    pigDeets: false
  }

  makeImgUrl = () => {
    let imgPig = this.props.pig.name.toLowerCase().split(' ').join('_')
    return require(`../hog-imgs/${imgPig}.jpg`)
  }



  render() {
    const { pig } = this.props

    return (
      <div className="ui eight wide column">
      <div className="ui card" onClick={() => {this.setState({pigDeets: !this.state.pigDeets})}}>
        <div className="content">
          <a className="header">{pig.name}</a>
          <div className="img">
            <img src={this.makeImgUrl()} alt={pig.name} />
          </div>

          {this.state.pigDeets ? 
            <div >
              <div className="meta">
                <span className="date">{pig.specialty}</span>
              </div>
              <div className="description">
              {pig.greased ? "Greased" : "Not Greased.... yet"}
              </div>
            </div>
            :
            <div > Click for more details! </div>
          } 





        </div>
      </div>
        
    </div>
    )
  }


} 

export default Pig 