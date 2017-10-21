import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IndividualBook from './IndividualBook'
import * as BooksAPI from '../utils/BooksAPI'
import { Link } from 'react-router-dom'


class BookSearch extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		onShelfChange: PropTypes.func.isRequired
	}

	state = {
		query: '',
		searchBooks: []
	}

	updateQueryAndSearch = (event) => {
		const searchQuery = event.target.value
		this.setState(
			{
				query: searchQuery
			}, this.searchAPI(searchQuery)
		)
	}

	searchAPI = (query) => {
		if(query) {
			BooksAPI.search(query, 10).then((results) => {
		    	if(!results || results.error || results === undefined) {
					this.setState({ searchBooks: [] })
					return
				}
		      	this.setState(state => ({
		        	searchBooks: results
		      	}))
		    })
		}
	}

	render() {
		const { query, searchBooks } = this.state
		return (
			<div className="search-books">
	            <div className="search-books-bar">
	            	<div className="close-search">
			          <Link to='/' className='close-search'>Close</Link>
			        </div>
	             	<div className="search-books-input-wrapper">
		                <input
		                	type="text"
		                	placeholder="Search by title or author"
		                	value={query}
		                	onChange={(event) => this.updateQueryAndSearch(event)}
		                />
	              	</div>
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid">
	              	{searchBooks.filter((book) => book.imageLinks !== undefined).map((book) => {
		        			return (
		        				<li key={book.id}>
			        				<IndividualBook mainBooks={this.props.books} book={book} onShelfChange={this.props.onShelfChange}/>
			        			</li>
		        			)
		        		})}
	              </ol>
	            </div>
          </div>
		)
	}
}

export default BookSearch