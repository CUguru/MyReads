import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ShelvedBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		onShelfChange: PropTypes.func.isRequired
	}

	render() {
		// const { books } = this.props
		console.log(this.props.books)
		return (
			<div>
				<div className='list-books'>
					<div className="list-books-title">
			        	<h1>MyReads</h1>
			        </div>
			        <div className="list-books-content">
			       		<BookShelf
			       			title='Currently Reading'
			       			books={this.props.books.filter((book) => {return book.shelf === 'currentlyReading'})}
			       			onShelfChange={this.props.onShelfChange}
			       		/>
						<BookShelf
							title='Want to Read'
							books={this.props.books.filter((book) => {return book.shelf === 'wantToRead'})}
							onShelfChange={this.props.onShelfChange}
						/>
						<BookShelf
							title='Read'
							books={this.props.books.filter((book) => {return book.shelf === 'read'})}
							onShelfChange={this.props.onShelfChange}
						/>
			        </div>
				</div>
				<div className="open-search">
		          <Link to='/search' className='open-search'>Add a book</Link>
		        </div>
			</div>

		)
	}
}

export default ShelvedBooks