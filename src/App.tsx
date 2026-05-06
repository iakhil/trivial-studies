import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CountryFlagsPage from './pages/CountryFlagsPage'
import CountryCapitalsPage from './pages/CountryCapitalsPage'
import CountryPopulationsPage from './pages/CountryPopulationsPage'
import DinosaursPage from './pages/DinosaursPage'
import GeographyPage from './pages/GeographyPage'
import MountainRangesPage from './pages/MountainRangesPage'
import USHistoryPage from './pages/USHistoryPage'
import USPresidentsPage from './pages/USPresidentsPage'
import USStatesGamePage from './pages/USStatesGamePage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country-flags" element={<CountryFlagsPage />} />
        <Route path="/country-capitals" element={<CountryCapitalsPage />} />
        <Route path="/country-populations" element={<CountryPopulationsPage />} />
        <Route path="/dinosaurs" element={<DinosaursPage />} />
        <Route path="/mountain-ranges" element={<MountainRangesPage />} />
        <Route path="/geography" element={<GeographyPage />} />
        <Route path="/us-history" element={<USHistoryPage />} />
        <Route path="/us-presidents" element={<USPresidentsPage />} />
        <Route path="/us-states-game" element={<USStatesGamePage />} />
      </Routes>
    </div>
  )
}

export default App
