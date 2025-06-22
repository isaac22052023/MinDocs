import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { DocumentCard } from './components/DocumentCard/DocumentCard';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
    /*{
      id: 4,
      code: "TR_886686-isilveira",
      date: "31 de mai. de 2025 00:03",
      title: "Termo de devolução de ativo",
      updatedBy: ["Isaac Silveira Marques", "Pedro"]
    },*/
    
  ]);

  return (
    <div className="app">
      <Header />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      
      <main className="main-content">
        <h1>Meus Documentos</h1>
        
        <div className="documents-container">
          {documents.map(document => (
            <DocumentCard 
              key={document.id}
              title={document.title}
              code={document.code}
              date={document.date}
              updatedBy={document.updatedBy}
            />
          ))}
        </div>
      </main>
    </div>
  );
}