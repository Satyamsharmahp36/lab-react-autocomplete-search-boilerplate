import './App.css'
import Searching from './components/Searching'
import Data from "../resources/countryData.json"

function App() {
  return (
    <>
      <Searching data={Data}/>
    </>
  )
}

export default App
