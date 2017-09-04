import React, { Component} from 'react'
import PropTypes from 'prop-types';
import Book from './Book'
import { Link } from 'react-router-dom'
//title, subtitle, authors, publisher, publishedDate, description, industryIdentifiers, readingModes, pageCount, printType, categories, averageRating, ratingsCount, maturityRating, allowAnonLogging, contentVersion, panelizationSummary, imageLinks, language, previewLink, infoLink, canonicalVolumeLink, id, shelf}
class BookShelf extends Component {

  static PropTypes = {
    books : PropTypes.array.isRequired
  }

filteredBooks(shelf)  {
    return this.props.books.filter((book)  => (book.shelf === shelf));
  }
    render(){
      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
          <Book shelfName="currently Reading" books={this.filteredBooks('currentlyReading')} updateStatus={(book,value) => this.props.updateStatus(book,value)}/>
          <Book shelfName="Want to Read" books={this.filteredBooks('wantToRead')} updateStatus={(book,value) => this.props.updateStatus(book,value)}/>
          <Book shelfName="Read" books={this.filteredBooks('read')} updateStatus={(book,value) => this.props.updateStatus(book,value)}/>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>)
      }
  }

export default BookShelf
