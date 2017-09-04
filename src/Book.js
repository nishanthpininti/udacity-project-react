import React, { Component} from 'react'
import PropTypes from 'prop-types';
import ShelfOptions from './ShelfOptions'

class Book extends Component {

  static PropTypes = {
    books : PropTypes.array.isRequired
  }
    render(){
      return (
          <div className="list-books-content">
              <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map((book) => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+ book.imageLinks.thumbnail +'")' }}></div>
                            <ShelfOptions shelf={book.shelf} shelfStatus={(value) => this.props.updateStatus(book,value)}/>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                      ))}
                      </ol>
                    </div>
              </div>
            </div>
        )
      }
  }

export default Book
