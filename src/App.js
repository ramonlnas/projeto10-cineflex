import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filmes from "./Filmes/Filmes";
import Sessao from "./Sessão/Sessao";
import GlobalStyle from "./globalStyles";
import Sala from "./Sala/Sala";
import Sucesso from "./Sucesso/Sucesso";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Filmes/>}/>
        <Route path="/sessao/:idFilme" element={<Sessao/>}/>
        <Route path="/sala/:idSala" element={<Sala/>}/>
        <Route path="/sucesso/" element={<Sucesso />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
