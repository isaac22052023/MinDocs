import React from 'react';
import './CreateDocument.css';

export function CreateDocument() {
  return (
    <div className="create-document-container">
      <h1 className="create-document-title">Criar Novo Documento</h1>
      
      <div className="document-form">
        <div className="form-group">
          <label htmlFor="document-type">Tipo de Documento</label>
          <select id="document-type" className="form-control">
            <option value="">Selecione um tipo</option>
            <option value="termo-entrega">Termo de Entrega de Ativo</option>
            <option value="termo-devolucao">Termo de Devolução de Ativo</option>
            <option value="contrato">Contrato</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="document-title">Título do Documento</label>
          <input 
            type="text" 
            id="document-title" 
            className="form-control" 
            placeholder="Digite o título do documento"
          />
        </div>

        <div className="form-group">
          <label htmlFor="document-description">Descrição</label>
          <textarea 
            id="document-description" 
            className="form-control" 
            rows="4"
            placeholder="Adicione uma descrição para o documento"
          ></textarea>
        </div>

        <div className="form-actions">
          <button className="btn-cancel"><a href='/home'>Cancelar</a></button>
          <button className="btn-submit">Criar Documento</button>
        </div>
      </div>
    </div>
  );
}