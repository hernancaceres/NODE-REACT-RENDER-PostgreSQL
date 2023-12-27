import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateProyectForm from './pages/CreateProyectForm'
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create-proyects" element={< CreateProyectForm />} />
        <Route path="/proyectos" element={< ProjectList />} />
        <Route path="/" element={< Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
