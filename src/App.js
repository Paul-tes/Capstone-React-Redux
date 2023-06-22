import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import Rocket from './components/Rocket';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
