import { ChangeEvent, useState } from "react"

const useForecast = () => {
  // Coordinates by location name
  // http://api.openweathermap.org/geo/1.0/direct?q={}&limit={limit}&appid={process.env.REACT_APP_API_KEY}
  const [searchValue, setSearchValue] = useState<string>('')

  const getLocation = () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q={searchValue.trim()}&limit=5&appid={process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    getLocation()
  }

  // Current weather API
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={process.env.REACT_APP_API_KEY}

}

export default useForecast