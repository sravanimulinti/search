import {Component} from 'react'

import DestinationItem from './DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeButton = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg">
        <h1 className="heading">Destination Search</h1>
        <div className="box-input">
          <input
            type="search"
            placeholder="search"
            onChange={this.onChangeButton}
            value="searchInput"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="img1"
            alt="search icon"
          />
        </div>
        <ul className="card">
          {searchResult.map(eachObj => (
            <DestinationItem destinationItem={eachObj} key={eachObj.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
