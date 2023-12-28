import { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_BACKEND_URL ;
//const URL =  "https://node-react-render-postgresql.onrender.com";

const CreateProjectForm = () => {
  const [project, setProject] = useState({
    name: '',
    priority: '', // Cambiado a un string, ajustar según sea necesario
    description: '',
  });

  // const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${URL}/api/projects`, 
        { ...project },
        {
          withCredentials: true,
        }
      );

      // Lógica adicional después de crear el proyecto (redirección, actualización, etc.)
      // navigate('/posts');

      console.log('Proyecto creado:', response.data);
    } catch (error) {
      console.error('Error al crear el proyecto:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h2>Crear Nuevo Proyecto</h2>
      <form onSubmit={handleCreateProject}>
        <label>Nombre: </label>
        <input type="text" name="name" placeholder="Nombre" value={project.name} onChange={handleInputChange} />
        <br />
        <label>Priority: </label>
        <input type="number" name="priority" placeholder="Prioridad" value={project.priority} onChange={handleInputChange} />
        <br />
        <label>Descripción: </label>
        <textarea name="description" placeholder="Descripción" value={project.description} onChange={handleInputChange} />
        <br />
        <button type="submit">Crear Proyecto</button>
      </form>
    </div>
  );
};

export default CreateProjectForm;
