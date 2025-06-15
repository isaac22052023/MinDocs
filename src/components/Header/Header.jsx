import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-left"></div>

      {/*Caixa de Busca*/}
      <div className="search-container">
        <input 
          type="text"
          placeholder="Procurar por pessoas, documentos..." 
          className="search-input"
        />
        <span className="material-icons search-icon">search</span>
      </div>

      {/* Botão de Filtro */}
      <button className="filter-button">
        <span className="material-icons">filter_list</span>
      </button>

      {/* Ícone de Perfil */}
      <button className="profile-icon">
        <span className="material-icons">person</span>
      </button>

    </header>
  );
};

export default Header;