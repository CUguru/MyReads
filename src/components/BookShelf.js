import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IndividualBook from './IndividualBook'

class BookShelf extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired, // this prop is already filtered by book shelf once it's called
		title: PropTypes.string.isRequired,
		onShelfChange: PropTypes.func.isRequired
		// pass in the function that makes the shelf change possible
	}

	render() {
		console.log(this.props.books)
		return (
			<div className="bookshelf">
		        <h2 className="bookshelf-title">{this.props.title}</h2>
		        <div className="bookshelf-books">
		        	<ol className="books-grid">
		        		{this.props.books.map((book) => {
		        			return (
		        				<li key={book.id}>
			        				<IndividualBook book={book} onShelfChange={this.props.onShelfChange}/>
			        			</li>
		        			)
		        		})}
		        	</ol>
		        </div>
		    </div>
		)
	}
}

export default BookShelf