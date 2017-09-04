import React, { Component} from 'react'
import PropTypes from 'prop-types';
import Book from './Book'
import { Link } from 'react-router-dom'


class SearchBooks extends Component {
  static PropTypes = {
    searchBookResults : PropTypes.array.isRequired,
    searchCall : PropTypes.func.isRequired
  }
render() {
  return (
    <div>
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" value={this.props.query} onChange={(event) => this.props.searchCall(event.target.value)} placeholder="Search by title or author"/>
        </div>
      </div>
      </div>
    <Book books={this.props.searchBookResults} updateStatus={(book,value) => this.props.updateStatus(book,value)}/>
    </div>
  )}

}

export default SearchBooks
