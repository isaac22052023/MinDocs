import React, { useState, useEffect } from 'react';
import './Login.css';
import bg1 from '/src/assets/Images/LoginBackground1.webp';
import bg2 from '/src/assets/Images/LoginBackground2.webp'; 
import bg3 from '/src/assets/Images/LoginBackground3.webp';
import bg4 from '/src/assets/Images/LoginBackground4.webp';

const backgroundImages = [bg1, bg2, bg3, bg4];

  export function Login () {
  const [currentBackground, setCurrentBackground] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setCurrentBackground(backgroundImages[randomIndex]);
  }, []);

  const handleLogin = () => {
    console.log('Login:', { email, password });
    
    // Validação básica
    if (!email || !password) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    
    // Simular login bem-sucedido e redirecionar para /home
    console.log('Redirecionando para /home...');
    window.location.href = '/home';
  };

  const handleForgotPassword = () => {
    console.log('Esqueci minha senha');
    //adicionar a lógica para recuperação de senha
  };
  const handleCreateAccount = () => {
    console.log('Criar uma conta');
    //adicionar a lógica para recuperação de senha
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${currentBackground})` }}>
      <div className="overlay"></div>
      
      {/* Barra lateral de login */}
      <div className="login-sidebar">
        <div className="login-content">
          <h2>Fazer logon</h2>
          
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              className="login-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="login-input"
            />
          </div>
          
          <button onClick={handleLogin} className="login-button">
            Entrar
          </button>
          
          <a href="/register" onClick={handleForgotPassword} className="links">
            Criar uma conta
          </a>
          <a href="#" onClick={handleForgotPassword} className="links">
            Esqueci minha senha
          </a>
        </div>
      </div>
    </div>
  );
};
