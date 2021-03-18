import React, { useState, useEffect } from 'react';
import Jumbotron from '../components/Jumbotron'
import Result from '../components/Result';
import ResultCard from '../components/ResultCard';
import SearchForm from '../components/SearchForm';
import API from '../utils/API';

function Home() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    const handleInputChange = event => {
        event.preventDefault();

        setSearch(event.target.value);
    };

    const handleSaveBook = id => {
        API.saveBook({
            id: books.id,
            title: books.volumeInfo.title,
            authors: books.volumeInfo.authors,
            description: books.volumeInfo.description,
            image: books.volumeInfo.imageLinks.thumbnail,
            link: books.volumeInfo.infoLink,
        });
    };

    const handleSearchForm = event => {
        event.preventDefault();

        API.getGoogleBooks(search)
            .then(res => {
                setBooks(res);
                console.log(books);
            })
            .catch(err => console.log(err));
    }

    const resultsMap = books.map(book => (
        <ResultCard
            key={book.id}
            title={book.books.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.thumbnail}
            link={book.volumeInfo.infoLink}
            Button={() => (
                <button
                    onClick={() => handleSaveBook(book.id)}
                    className="btn btn-primary ml-2"
                >
                    Save
                </button>
            )}
        />
    ))

    return (
        <div className="container">
            <Jumbotron />
            <SearchForm
                handleInputChange={handleInputChange}
                handleSearchForm={handleSearchForm}
            />
            <Result />
            {!books.length ? (<h5>Nothing to display</h5>)
                : (
                    { resultsMap }
                )}
        </div>
    )
}

export default Home;
