import React from 'react'
import { useState } from 'react'
import Productcard from './Productcard'



const Search = ({data}) => {
    const [query, setQuery] = useState('')

    const queryData = data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    const handleSearch = (e) => {
        e.preventDefault();
      };

  return (
   <>
    <form className='search' onSubmit={handleSearch}>

        <input className='searchform' onChange={(e) => setQuery(e.target.value)}  type="text" placeholder="Search..."   
        // value={}
        
         />

    </form>
    
    <div className='container'>
    {queryData.map((item) => (
      <Productcard
        key={item.id}
        name={item.name}
        tagline={item.tagline}
        image={item.image_url}
        abv={item.abv}
        ibu={item.ibu}
        ph={item.ph}
        srm={item.srm}
      />
    ))}
    </div>
    
   </>
  )
}

export default Search