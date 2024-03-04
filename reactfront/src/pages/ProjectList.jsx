import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = import.meta.env.VITE_BACKEND_URL;
//const URL =  "https://node-react-render-postgresql.onrender.com";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${URL}/api/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error('Error al obtener proyectos:', error.response ? error.response.data : error.message);
      }
    };

    fetchProjects();
  }, []); // El segundo argumento [] asegura que se ejecute solo una vez al montar el componente

  return (
    <div>
      <h2>Lista de Proyectos</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong> = Priority: {project.priority}, Description: {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
