import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AmericanLiteraturePage from './pages/AmericanLiteraturePage'
import CountryFlagsPage from './pages/CountryFlagsPage'
import CountryCapitalsPage from './pages/CountryCapitalsPage'
import CountryPopulationsPage from './pages/CountryPopulationsPage'
import DinosaursPage from './pages/DinosaursPage'
import GeologicTimePage from './pages/GeologicTimePage'
import GeographyPage from './pages/GeographyPage'
import JeopardyTriviaPage from './pages/JeopardyTriviaPage'
import MountainRangesPage from './pages/MountainRangesPage'
import OperaTriviaPage from './pages/OperaTriviaPage'
import ShakespeareTriviaPage from './pages/ShakespeareTriviaPage'
import USHistoryPage from './pages/USHistoryPage'
import USPresidentsPage from './pages/USPresidentsPage'
import USStatesGamePage from './pages/USStatesGamePage'
import {
  artHistoryTopic,
  mythologyTopic,
  polishHistoryTopic,
  scienceGrabBagTopic,
  sportsTriviaTopic,
  volcanoesTopic,
  wordOriginsTopic,
  worldHistoryTopic,
} from './data/jeopardyTopics'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/american-literature" element={<AmericanLiteraturePage />} />
        <Route path="/art-history" element={<JeopardyTriviaPage topic={artHistoryTopic} />} />
        <Route path="/country-flags" element={<CountryFlagsPage />} />
        <Route path="/country-capitals" element={<CountryCapitalsPage />} />
        <Route path="/country-populations" element={<CountryPopulationsPage />} />
        <Route path="/dinosaurs" element={<DinosaursPage />} />
        <Route path="/geologic-time" element={<GeologicTimePage />} />
        <Route path="/mountain-ranges" element={<MountainRangesPage />} />
        <Route path="/geography" element={<GeographyPage />} />
        <Route path="/mythology" element={<JeopardyTriviaPage topic={mythologyTopic} />} />
        <Route path="/opera-trivia" element={<OperaTriviaPage />} />
        <Route path="/polish-history" element={<JeopardyTriviaPage topic={polishHistoryTopic} />} />
        <Route path="/science-grab-bag" element={<JeopardyTriviaPage topic={scienceGrabBagTopic} />} />
        <Route path="/shakespeare-trivia" element={<ShakespeareTriviaPage />} />
        <Route path="/sports-trivia" element={<JeopardyTriviaPage topic={sportsTriviaTopic} />} />
        <Route path="/us-history" element={<USHistoryPage />} />
        <Route path="/us-presidents" element={<USPresidentsPage />} />
        <Route path="/us-states-game" element={<USStatesGamePage />} />
        <Route path="/volcanoes" element={<JeopardyTriviaPage topic={volcanoesTopic} />} />
        <Route path="/word-origins" element={<JeopardyTriviaPage topic={wordOriginsTopic} />} />
        <Route path="/world-history" element={<JeopardyTriviaPage topic={worldHistoryTopic} />} />
      </Routes>
    </div>
  )
}

export default App
