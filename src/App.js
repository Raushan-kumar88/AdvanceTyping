import React from 'react';
import {BrowserRouter as router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import TypingPractice from './TypingPractice';
import ResultsPage from './ResultsPage';
import PricingCards from './components/PriceCard';
import RegistrationForm from './Registration';
import LoginForm from './Login';

function App() {
  return (
  <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/practice" element={<TypingPractice />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/pricecard" element={<PricingCards />} />
        <Route path="/signup" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />

      </Routes>
      
  );
}

export default App;
