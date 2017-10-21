import React, { Component } from 'react'
import * as BooksAPI from './utils/BooksAPI'
import { Route } from 'react-router-dom'
import ShelvedBooks from './components/ShelvedBooks'
import BookSearch from './components/BookSearch'
import './App.css';

class BookApp extends Component {
  state = {
    books: []
  }

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  componentDidMount() {
    this.getAllBooks()
  }


  shelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks()
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={({ history }) => (
          <ShelvedBooks
            books={this.state.books}
            onShelfChange={(book, shelf) => {
              this.shelfChange(book, shelf)
              history.push('/')
            }}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <BookSearch
            books={this.state.books}
            onShelfChange={(book, shelf) => {
              this.shelfChange(book, shelf)
              history.push('/')
            }}
          />
        )}/>
      </div>
    )
  }
}

export default BookApp;
