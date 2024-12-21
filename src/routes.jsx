import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Matches from './pages/Matches';
import Chat from './pages/Chat';
import Community from './pages/Community';
import Challenges from './pages/Challenges';
import Settings from './pages/Settings';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="matches" element={<Matches />} />
        <Route path="chat" element={<Chat />} />
        <Route path="community" element={<Community />} />
        <Route path="challenges" element={<Challenges />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes; 