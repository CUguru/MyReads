import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI'
import ShelvedBooks from './components/ShelvedBooks'
import './App.css';

class BookApp extends Component {
  state = {
    books: [],
    searchedBooks: []
  }

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
      console.log(books)
    })
  }

  componentDidMount() {
    this.getAllBooks()
  }


  render() {
    return (
      <div className="app">
        <ShelvedBooks books={this.state.books}/>
      </div>
    )
  }
}

export default BookApp;
