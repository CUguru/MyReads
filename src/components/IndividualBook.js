import React, { Component } from 'react'
import PropTypes from 'prop-types'

class IndividualBook extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		onShelfChange: PropTypes.func.isRequired,
		mainBooks: PropTypes.array
	}

	render() {
		const { book, onShelfChange, mainBooks } = this.props

		if(mainBooks) {
			for(let b of mainBooks) {
				if(b.id === book.id) {
					book.shelf = b.shelf
				}
			}
		}

		return(
			<div className="book">
				<div className="book-top">
					<div
					    className="book-cover"
					    style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
					</div>
					<div className="book-shelf-changer">
					    <select defaultValue={book.shelf} onChange={(event) => onShelfChange(book, event.target.value)}>
					        <option value="none" disabled>Move to...</option>
					        <option value="currentlyReading">Currently Reading</option>
					        <option value="wantToRead">Want to Read</option>
					        <option value="read">Read</option>
					        <option value="none">None</option>
					    </select>
					</div>
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">{book.authors}</div>
			</div>
		)
	}

}

export default IndividualBook