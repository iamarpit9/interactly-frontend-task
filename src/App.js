import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WelcomePage } from "./components/WelcomePage";
import CampaignPage from './components/CampaignPage';
import FacebookBasicsPage from './components/FacebookBasicsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="campaign" element={<CampaignPage />} />
          <Route exact path="facebook" element={<FacebookBasicsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
