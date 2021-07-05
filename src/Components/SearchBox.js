import React from 'react'

const SearchBox = ({searchfield,searchChange}) =>{
    return(
        <div className='pa2'>

            <input className='pa3 ba b--green bg-lightest-blue outline-0' type='search' placeholder='robots' onChange={searchChange}/>

        </div>
        
    )
}



export default SearchBox;