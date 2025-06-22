import { Header } from "../../components/Header/Header.jsx"; 
import { Sidebar } from "../../components/Sidebar/Sidebar.jsx"
import { DocumentCard } from "../../components/DocumentCard/DocumentCard.jsx";

export function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <DocumentCard />
    </>
  );
}
