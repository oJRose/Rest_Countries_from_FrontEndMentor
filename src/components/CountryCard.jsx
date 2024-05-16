import React from 'react'

export const CountryCard = ({country}) => {
    const { name, flags: {png, alt}, capital, population,region } = country
  return (
    <>
            <div className='min-w-[250px] sm:w-[260px] bg-darkElements'>
                <div className='border-4 border-red-700 h-[45%]'>
                <img className='h-full w-full object-cover' src={png} alt={alt} />
                </div>
                <div className='p-5'>
                    <h2 className='text-lg'>{name.common}</h2>
                    <p>Population: <span className='font-light'>{population.toLocaleString()}</span></p>
                    <p>Capital: <span className='font-light'>{capital}</span></p>
                    <p>Region: <span className='font-light'>{region}</span></p>
                </div>
            </div>
    </>
  )
}
