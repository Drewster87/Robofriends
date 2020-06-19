import React from 'react';

const Searchbox = ({onSearchChange}) => {
    return(
            <div>
                <input type='search' placeholder='search robots' onChange={onSearchChange} />
            </div>
    );
}

export default Searchbox;