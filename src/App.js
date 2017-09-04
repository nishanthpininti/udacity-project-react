import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    allBooks : [],
    query : '',
    searchBooks : []
  }

  componentDidMount() {
      BooksAPI.getAll().then(books => this.setState({
        allBooks : books
      }))
  }

  updateQuery(query)  {

   this.setState({
     query : query,
   });
   if(this.state.query.length>0){
    BooksAPI.search(query,100).then(books => this.setState({
      searchBooks : Array.isArray(books) ? books : []
    }))
  }
  }

updateBookStatus(book,value) {
  let counter = true;
  book.shelf = value;
  this.state.allBooks.forEach((books) => {
    if(books.id === book.id){
        books.shelf = book.shelf;
        counter = false;
    }
  })
  if(counter){
    let allBooks = this.state.allBooks
    allBooks.push(book);
    this.setState({
      allBooks : allBooks
    })
  }
  else{
    this.setState({
      allBooks : this.state.allBooks
  })
  }
  BooksAPI.update(book,value);
}

  render() {
    return (
      <div className="app">

      <Route path="/" exact render={ () => (
        <BookShelf books={this.state.allBooks} updateStatus={(book,value) => this.updateBookStatus(book,value)}/>
        ) } />
        <Route path="/search" render={ () => (
                <SearchBooks searchBookResults={this.state.searchBooks}
                query={this.state.query}
                searchCall={(value) => this.updateQuery(value)} updateStatus={(book,value) => this.updateBookStatus(book,value)}/>
        ) } />
        </div>
       )
      }
}

export default BooksApp
