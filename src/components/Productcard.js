import React from 'react'

const Productcard = ({ name, image, ibu, ph, srm, abv ,tagline}) => {
  const maxLengthThreshold = 10; // Adjust this threshold as needed
  const maxTaglineLengthThreshold = 25;
  const isNameTooLong = name.length > maxLengthThreshold;
  const isTaglineTooLong = tagline.length > maxTaglineLengthThreshold;

  const truncatedTagline = isTaglineTooLong ? tagline.slice(0, maxTaglineLengthThreshold) + '...' // Add ellipsis when it's too long
: tagline;

  return (
    <>
        <div className='card' >
          <div className='card-body'>
          <img src= {image} alt='' />
            <h1 className={`beer-name ${isNameTooLong ? 'small-beername' : ''}`}>{name}</h1>
            <div className='ibu-data'>
                <span className='IBU '>IBU-{ibu}</span>
                <span className='ph'>ph-{ph}</span>
                <span className='srm'>srm-{srm}</span>
            </div>
          </div>
            <div className= 'tagline'>
               <div className='abv-data'>
               <span className='ABV' >ABV</span>
                <span className='abv-perc'>{abv}<span>%</span></span>
               </div>
                <h2 className={`tagline-name ${isTaglineTooLong ? 'truncated' : ''}`}>{truncatedTagline}</h2>
            </div>
        </div>
    


    </>
  )
}   

export default Productcard