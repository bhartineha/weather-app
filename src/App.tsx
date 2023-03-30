import { ChangeEvent } from "react";
import Search from "./components/Search"
import useForecast from './hooks/useForecast'

const App = (): JSX.Element => {
  const { searchValue, onInputChange } = useForecast()
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <Search searchValue={searchValue} onInputChange={onInputChange} />
    </main>
  )
}

export default App
