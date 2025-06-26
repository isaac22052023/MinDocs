import React, { useState } from 'react';
import './DocumentCard.css';

export function DocumentCard() {
  const [documents] = useState([
    {
      id: 1,
      code: "TR_886686-isilveira",
      date: "22 de mai. de 2025 09:57",
      title: "Termo de entrega de ativo",
      updatedBy: ["Isaac Marques", "Maria"]
    },
    {
      id: 2,
      code: "TR_886686-isilveira",
      date: "27 de mai. de 2025 08:18",
      title: "Termo de devolução de ativo",
      updatedBy: ["Isaac Silveira Marques", "João"]
    },
    {
      id: 3,
      code: "TR_886686-isilveira",
      date: "31 de mai. de 2025 00:03",
      title: "Termo de devolução de ativo",
      updatedBy: ["Isaac Silveira Marques", "Pedro"]
    },
    // Adicione mais documentos para testar (pelo menos 5)
    {
      id: 4,
      code: "TR_886686-isilveira",
      date: "01 de jun. de 2025 10:15",
      title: "Termo de renovação",
      updatedBy: ["Ana Silva", "Carlos"]
    },
    {
      id: 5,
      code: "TR_886686-isilveira",
      date: "02 de jun. de 2025 14:30",
      title: "Termo de cancelamento",
      updatedBy: ["Paula", "Roberto"]
    },
    {
      id: 6,
      code: "TR_886686-isilveira",
      date: "02 de jun. de 2025 14:30",
      title: "Termo de cancelamento",
      updatedBy: ["Paula", "Roberto"]
    }
  ]);

  return (
    <div className="documents-page-container">
      <div className="documents-grid-container">
        {documents.map((doc) => (
          <div className="document-card" key={doc.id}>
            <div className="card-header">
              <span className="document-code">{doc.code}</span>
              <span className="document-date">{doc.date}</span>
            </div>

            <h3 className="document-title">{doc.title}</h3>

            <div className="updated-section">
              <h4 className="section-title">Atualizado</h4>
              <ul className="person-list">
                {doc.updatedBy.map((person, index) => (
                  <li key={index} className="person-item">
                    {person}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}