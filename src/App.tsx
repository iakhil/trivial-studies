import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CountryFlagsPage from './pages/CountryFlagsPage'
import CountryCapitalsPage from './pages/CountryCapitalsPage'
import CountryPopulationsPage from './pages/CountryPopulationsPage'
import GeographyPage from './pages/GeographyPage'
import MountainRangesPage from './pages/MountainRangesPage'
import USHistoryPage from './pages/USHistoryPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country-flags" element={<CountryFlagsPage />} />
        <Route path="/country-capitals" element={<CountryCapitalsPage />} />
        <Route path="/country-populations" element={<CountryPopulationsPage />} />
        <Route path="/mountain-ranges" element={<MountainRangesPage />} />
        <Route path="/geography" element={<GeographyPage />} />
        <Route path="/us-history" element={<USHistoryPage />} />
      </Routes>
    </div>
  )
}

export default App
