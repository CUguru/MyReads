import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class ShelvedBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}

	render() {
		// const { books } = this.props
		console.log(this.props.books)
		return (
			<div className='list-books'>
				<div className="list-books-title">
		        	<h1>MyReads</h1>
		        </div>
		        <div className="list-books-content">
		       		<BookShelf title='Currently Reading' books={this.props.books.filter((book) => {return book.shelf === 'currentlyReading'})}/>
					<BookShelf title='Want to Read' books={this.props.books.filter((book) => {return book.shelf === 'wantToRead'})}/>
					<BookShelf title='Read' books={this.props.books.filter((book) => {return book.shelf === 'read'})}/>
		        </div>
			</div>

		)
	}
}

export default ShelvedBooks