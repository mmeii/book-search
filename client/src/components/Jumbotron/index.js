import React from 'react'
import SearchForm from '../SearchForm'

const Jumbotron = () => {
    return (
        <div>
            <div className="jumbotron text-center">
                <h1>What should I read next?</h1>
                <p className="lead">Search for books to add to your virtual bookshelf.</p>
                <SearchForm />
            </div>
        </div>
    )
}

export default Jumbotron;
