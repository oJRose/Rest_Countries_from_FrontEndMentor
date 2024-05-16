import axios from 'axios'
import { useEffect, useState } from 'react'
import { CountryCard } from '../components/CountryCard'

export const Home = () => {

  const [countries, setCountries] = useState([])
  const API_URL = 'https://restcountries.com/v3.1/all'

  const API_Call = async () => {
    await axios.get(`${API_URL}`)
    .then(res => setCountries(res.data)) 
  }

  useEffect(() => {
    API_Call()
    console.log(countries)
  }, [])

  return (
    <>
    <h1>Hello</h1>
    <div className='p-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7  justify-items-center'>
      {countries.map((country) => (
        <CountryCard key={country.id} country={country} />
      ))}
      </div>
    </>
  )
}
