import React from 'react';

const SearchForm = (props) => {

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Where The Star Meets the Forest"
                aria-label="RWhere The Star Meets the Forest"
                aria-describedby="basic-addon2"
                value={props.search}
                onChange={props.handleInputChange}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default SearchForm;
