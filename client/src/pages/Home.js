import React, { Component } from 'react';
// import Grid from '../components/Grid';
import Jumbotron from '../components/Jumbotron'
import ResultContainer from '../components/ResultContainer';
import ResultCard from '../components/ResultCard';
import SearchForm from '../components/SearchForm';
import API from '../utils/API';

class Home extends Component {
    //initial state
    state = {
        search: "",
        books: []
    };

    // componentDidMount() {
    //     this.getGoogleBooks("");
    // }

    searchBooks = () => {
        API.getGoogleBooks(this.state.search)
            .then(res => {
                this.setState({
                    books: res.data.items
                })
            })
            .catch(() =>
                this.setState({
                    books: [],
                    message: "No books found, try to search for something else!"
                }));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }


    handleSearchForm = event => {
        event.preventDefault();
        this.searchBooks();
    }

    // save book by id
    handleSaveBook = id => {
        const currBook = this.state.books.find(book => book.id === id);

        API.saveBook({
            id: currBook.id,
            title: currBook.volumeInfo.title,
            authors: currBook.volumeInfo.authors,
            description: currBook.volumeInfo.description,
            image: currBook.volumeInfo.imageLinks.thumbnail,
            link: currBook.volumeInfo.infoLink,
        })
            .then(res => console.log("post book on save to db", res))
            .catch(err => console.log("err, can't save book", err));
    };


    // resultsMap = books.map(book => (
    //     <ResultCard
    //         key={book.id}
    //         title={book.books.volumeInfo.title}
    //         authors={book.volumeInfo.authors}
    //         description={book.volumeInfo.description}
    //         image={book.volumeInfo.imageLinks.thumbnail}
    //         link={book.volumeInfo.infoLink}
    //         Button={() => (
    //             <button
    //                 onClick={() => handleSaveBook(book.id)}
    //                 className="btn btn-primary ml-2"
    //             >
    //                 Save
    //             </button>
    //         )}
    //     />
    // ))

    render() {
        return (
            <div className="container" >
                {/* <Grid /> */}
                <Jumbotron />
                <SearchForm
                // handleInputChange={handleInputChange}
                // handleSearchForm={handleSearchForm}
                />
                <ResultContainer />
                {/* {!books.length ? (<h5>Nothing to display</h5>)
                    : (
                        { resultsMap }
                    )} */}
            </div >
        )
    }
}

export default Home;
