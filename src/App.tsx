import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CountryFlagsPage from './pages/CountryFlagsPage'
import CountryCapitalsPage from './pages/CountryCapitalsPage'
import CountryPopulationsPage from './pages/CountryPopulationsPage'
import GeographyPage from './pages/GeographyPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country-flags" element={<CountryFlagsPage />} />
        <Route path="/country-capitals" element={<CountryCapitalsPage />} />
        <Route path="/country-populations" element={<CountryPopulationsPage />} />
        <Route path="/geography" element={<GeographyPage />} />
      </Routes>
    </div>
  )
}

export default App
