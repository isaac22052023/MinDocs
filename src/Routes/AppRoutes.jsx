import { Routes, Route } from 'react-router-dom';
import { Login } from '../Pages/Login/Login';
import { Home } from '../Pages/Home/Home';

export default function AppRoutes() {
  return (
    <Routes>
     <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />     
    </Routes>
  );
}