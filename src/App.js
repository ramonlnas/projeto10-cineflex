import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filmes from "./Filmes/Filmes";
import Sessao from "./Sessão/Sessao";
import GlobalStyle from "./globalStyles";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Filmes/>}/>
        <Route path="/sessao/:idFilme" element={<Sessao/>}/>
      </Routes>
    </BrowserRouter>
  );
}
