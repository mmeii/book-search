import React from 'react';

const SearchForm = () => {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default SearchForm;
