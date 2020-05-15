import React from 'react'

function Pagination({gotoNextPage, gotoPrevPage}) {
    return (
        <div className = 'pageButtons'>
            {gotoPrevPage && <button onClick = {gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button onClick = {gotoNextPage}>Next</button>}
        </div>
    )
}

export default Pagination
