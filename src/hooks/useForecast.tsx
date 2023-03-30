import { ChangeEvent, useState } from "react"
import { optionType, forecastType } from './../types/index'

const BASE_URL = 'http://api.openweathermap.org'

const useForecast = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  const getLocation = (value: string) => {
    fetch(`${BASE_URL}/geo/1.0/direct?q=${value.trim()}&limit=5&lang=en&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setSearchValue(value)
    if (value === '') return
    getLocation(value)
  }

  // Current weather API
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={process.env.REACT_APP_API_KEY}

  return {
    searchValue,
    onInputChange
  }

}

export default useForecast