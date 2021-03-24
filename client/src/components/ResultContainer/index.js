import React, { Component } from 'react';
import ResultCard from '../ResultCard';

class ResultContainer extends Component {
    render() {

        return (
            this.props.bookState.map((book) => (
                <ResultCard
                    key={book.id}
                    id={book.id}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    link={book.volumeInfo.previewLink}
                />
            ))
        )
    }
}

export default ResultContainer;
