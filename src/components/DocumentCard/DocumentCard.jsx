import './DocumentCard.css';

export function DocumentCard({ title, code, date, updatedBy = [] }) {
  return (
    <div className="document-card">
      <div className="card-header">
        <span className="document-code">{code}</span>
        <span className="document-date">{date}</span>
      </div>
      
      <h3 className="document-title">{title}</h3>
      
      <div className="updated-section">
        <h4 className="section-title">Atualizado </h4>
        <ul className="person-list">
          {updatedBy.map((person, index) => (
            <li key={index} className="person-item">
              {person}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocumentCard;