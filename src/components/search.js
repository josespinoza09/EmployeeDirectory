import React from 'react';


const Search = (props) => {
    return (
        <div className="container">
            <form>
                <div className="form-group search-widget">
                    <div className="input-group mb-3">
                        <input style={{width:'500px'}} className='form-control' onChange={e => props.employeeSearch(e)} name='search' type='text' placeholder='Search directory for Employee' id='search' />
                        <button className="btn btn-primary">Reset Page</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search;