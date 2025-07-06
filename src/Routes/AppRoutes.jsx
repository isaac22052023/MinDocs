import { Routes, Route } from 'react-router-dom';
import { Login } from '../Pages/Login/Login';
import { Home } from '../Pages/Home/Home';
import { CreateDocument } from '../Pages/Home/CreateDocument'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/criar-documento" element={<CreateDocument />} />  
    </Routes>
  );
}