import React from 'react'

const SearchBox = ({SearchShow}) => {
  return (
    <div className='p-2'>
        <input type='search' placeholder='Search robot' onChange={SearchShow} />
    </div>
  )
}

export default SearchBox