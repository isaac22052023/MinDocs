import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('meus-documentos');
  const navigate = useNavigate();

  const menuItems = [
    { id: 'meus-documentos', label: 'Meus Documentos' },
    { id: 'compartilhados', label: 'Documentos Compartilhados' },
    { id: 'agendados', label: 'Documentos Agendados' },
  ];

  const handleCreateDocument = () => {
    navigate('/criar-documento');
    setActiveItem(''); // Limpa o item ativo
  };

  const handleNavigate = (id) => {
    setActiveItem(id);
    navigate(`/${id}`);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          {isOpen && <h2 className="sidebar-title">MinDocs</h2>}
          <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {isOpen && (
          <>
            <button 
              className="create-document-btn"
              onClick={handleCreateDocument}
            >
              <span className="material-icons">add_circle</span>
              Criar Documento
            </button>

            <nav className="sidebar-nav">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className={`sidebar-item ${activeItem === item.id ? 'active' : ''}`}
                  onClick={() => setActiveItem(item.id)}
                >
                  <span className="material-icons">description</span>
                  {item.label}
                </button>
              ))}
            </nav>
          </>
        )}
      </div>
    </>
  );
};