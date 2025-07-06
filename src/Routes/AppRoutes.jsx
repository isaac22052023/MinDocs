import { Routes, Route } from 'react-router-dom';
import { Login } from '../Pages/Login/Login';
import { Home } from '../Pages/Home/Home';
import { DocumentCreation } from '../Pages/DocumentCreation/DocumentCreation'
import { AccountRegistration } from '../Pages/AccountRegistration/AccountRegistration'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<AccountRegistration />} />

      <Route path="/home" element={<Home />} />
      <Route path="/criar-documento" element={<DocumentCreation />} />  
    </Routes>
  );
}