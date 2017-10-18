import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BooksList extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}
	render() {
		return (
			<div className="bookshelf">
		        <h2 className="bookshelf-title">Currently Reading</h2>
		        <div className="bookshelf-books">
		            <ol className="books-grid">
		            	<Book />
		            </ol>
		        </div>
		    </div>
		)
	}
}

export default BooksList;