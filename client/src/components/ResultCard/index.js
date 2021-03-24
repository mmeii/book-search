import React, { Component } from 'react';
import './style.css';

class ResultCard extends Component {


    render() {

        return (
            <h1> Result</h1>
        )
        // const { book } = this.props;

        // return (
        //     <div className="card mb-3">
        //         <div className="row g-0">
        //             <div className="col-md-4">
        //                 <img src={book.image} className="img-fluid" alt={book.title} />
        //             </div>
        //             <div className="col-md-8">
        //                 <div className="card-body">
        //                     <h5 className="card-title">{book.title}</h5>
        //                     <p className="card-text">
        //                         Author(s): {book.authors}
        //                         <br />
        //                         Description: {book.description}
        //                     </p>
        //                     <p className="card-text"><small>
        //                         <button type="button" className="btn" id="detailsBtn">
        //                             <a href={book.link} target="_blank" rel="noopener noreferrer">
        //                                 Preview
        //                             </a>
        //                         </button>
        //                         <button type="button" className="btn" id="saveBtn">Save</button></small></p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // )
    }

}

export default ResultCard;
