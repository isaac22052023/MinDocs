import React, { useState, useEffect } from 'react';
import './Register.css';

import bg1 from '/src/assets/Images/LoginBackground1.webp';
import bg2 from '/src/assets/Images/LoginBackground2.webp'; 
import bg3 from '/src/assets/Images/LoginBackground3.webp';
import bg4 from '/src/assets/Images/LoginBackground4.webp';

const backgroundImages = [bg1, bg2, bg3, bg4];

export function Register() {
  const [currentBackground, setCurrentBackground] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setCurrentBackground(backgroundImages[randomIndex]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { fullName, birthDate, email, password } = formData;
    
    if (!fullName.trim()) {
      alert('Por favor, digite seu nome completo');
      return false;
    }
    
    if (!birthDate) {
      alert('Por favor, selecione sua data de nascimento');
      return false;
    }
    
    if (!email.trim()) {
      alert('Por favor, digite seu email');
      return false;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Por favor, digite um email válido');
      return false;
    }
    
    if (!password.trim()) {
      alert('Por favor, digite uma senha');
      return false;
    }
    
    if (password.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres');
      return false;
    }
    
    return true;
  };

  const handleRegister = () => {
    console.log('Dados do cadastro:', formData);
    
    if (!validateForm()) {
      return;
    }
    
    // Simular cadastro bem-sucedido e redirecionar para /home
    console.log('Cadastro realizado com sucesso! Redirecionando para /home...');
    alert('Cadastro realizado com sucesso!');
    window.location.href = '/home';
  };

  const handleLoginRedirect = () => {
    console.log('Redirecionando para página de login...');
    window.location.href = '/login';
  };

  return (
    <div className="register-page" style={{ backgroundImage: `url(${currentBackground})` }}>
      <div className="overlay"></div>
      
      {/* Barra lateral de cadastro */}
      <div className="register-sidebar">
        <div className="register-content">
          <h2>Criar conta</h2>
          
          <div className="input-group">
            <label htmlFor="fullName">Nome completo</label>
            <input 
              type="text" 
              id="fullName" 
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Digite seu nome completo"
              className="register-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="birthDate">Data de nascimento</label>
            <input 
              type="date" 
              id="birthDate" 
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              className="register-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Digite seu email"
              className="register-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Digite sua senha"
              className="register-input"
            />
          </div>
          
          <button onClick={handleRegister} className="register-button">
            Criar conta
          </button>
          
          <a href="/" onClick={handleLoginRedirect} className="login-link">
            Já tem uma conta? Faça login
          </a>
        </div>
      </div>
    </div>
  );
};