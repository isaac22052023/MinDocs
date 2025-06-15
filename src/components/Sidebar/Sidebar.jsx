import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({isOpen, onToggle}) => {
  const [activeItem, setActiveItem] = useState('meus-documentos'); /*iniciar sempre em "meus documentos"*/

  const menuItems = [
    { id: 'meus-documentos', label: 'Meus Documentos' },
    { id: 'compartilhados', label: 'Documentos Compartilhados' },
    { id: 'agendados', label: 'Documentos Agendados' },
  ];

    return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        {isOpen && <h2 className="sidebar-title">MinDocs</h2>}
        <button className="sidebar-toggle" onClick={onToggle}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <>
          <button className="create-document-btn">
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
  );
};

export default Sidebar;