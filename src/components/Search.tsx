import { ChangeEvent, useState } from 'react'
import Header from './Header'

const Search = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('')

  const getLocation = (value: string) => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&lang=en&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setSearchValue(value)
    if (value === '') return
    getLocation(value)
  }

  return (
    <>
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
        <Header />
        <section className='relative mt-4'>
          <input
            type='text'
            className='px-2 py-1 rounded-l-md border-2 border-white'
            value={searchValue}
            onChange={onInputChange}
          />
          <button
            // onClick={onSubmit}
            className='rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500  text-zinc-100 px-2 py-1 cursor-pointer'>
            Search
          </button>

        </section>
      </section>
    </>
  )
}

export default Search