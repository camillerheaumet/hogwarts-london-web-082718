import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigsContainer from './PigsContainer'

import hogs from '../porkers_data';

class App extends Component {

  constructor() {
    super() 
    this.state = {
      pigs : hogs,
      filter: '',
      sorted: false
    }
  }

  updateFilter = newFilter => {
    this.setState({ filter: newFilter })
  }

  filterPigs = () => {
    const filteredPigs = this.state.pigs.filter(pig =>
      pig.name.toLowerCase().includes(this.state.filter.toLowerCase())
    )
    return filteredPigs
  }

  updateSortPigsStatus = () => {
    this.setState({sorted: !this.state.sorted})
  }

  sortPigs = (pigs) => {          // pigs is just an argument here - an array
    let sortedPigs = [...pigs]    // creating a duplicate here 
    sortedPigs = sortedPigs.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      } 
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
    // console.log(sortedPigs)
    return sortedPigs
    
  }

  render() {
    const { updateFilter, filterPigs, sortPigs, updateSortPigsStatus } = this
    const { pigs } = this.state
    let lePigs = this.state.sorted ? sortPigs(this.state.pigs) : pigs     // saves pigs as lePigs when sorted or not sorted
    let leFilteredPigs = this.state.sorted ? sortPigs(filterPigs()) : filterPigs()  // similar to aboved, but for when pigs have been filtered
    return (
      <div className="App">
          < Nav />
          {<input className="filter-pig-input" onKeyUp={event => updateFilter(event.target.value)} placeholder='Filter the pigs out of it!!'></input>}
          <button className="sort-button" onClick={updateSortPigsStatus}> {this.state.sorted ? "Unsort pigs" : "Sort pigs"} </button>
          {< PigsContainer pigs={lePigs} filteredPigs={leFilteredPigs} />}

      </div>
    )
  }
}

export default App;
