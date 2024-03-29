import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


function App() {
  
  return (
    <>

      <FontAwesomeIcon icon={icon({name: 'user-secret'})} /> // Defaults to the Classic family, Solid style
      <FontAwesomeIcon icon={icon({name: 'coffee', style: 'regular'})} /> // Defaults to Classic family
      <FontAwesomeIcon icon={icon({name: 'coffee', family: 'sharp', style: 'solid'})} /> // Setting both family and style
      <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /> // A brand icon

    </>
  )
}

export default App
