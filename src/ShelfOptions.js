import React, { Component} from 'react'

class ShelfOptions extends Component {

changeShelfStatus(event) {
  if(!this.props.shelf){
    this.props.shelfStatus(event.target.value);
  }
}

render() {
  return (
    <div className="book-shelf-changer">
      <select value={this.props.shelf} onClick={(event) => this.changeShelfStatus(event)} onChange={(event) =>
      this.props.shelfStatus(event.target.value)}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )}

}

export default ShelfOptions
