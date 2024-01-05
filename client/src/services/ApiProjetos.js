import axios from 'axios';

const API_BASE_URL = "http://localhost:4000/projetos";

const create_projetos = async (newProjetos) => {
    try {
        const res = await axios.post(API_BASE_URL + '/create-projetos', {
            nome: newProjetos.nome, 
            descrisao: newProjetos.descrisao,
            dataInicio: newProjetos.dataInicio,
            dataFinal: newProjetos.dataFinal,
            valorTotal: newProjetos.valorTotal,
            estado: newProjetos.estado,
            tipo: newProjetos.tipo
        });
        return res.data
    }catch(error) {
        console.error("Error creating projeto:", error);
        throw error;
    }
}

const get_projetos = async () => {
    try {
        const res = await axios.get(API_BASE_URL + '/get-projetos');
        return res.data;
    }catch(error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

const get_projetos_id = async (id) => {
    try {
        const res = await axios.get(`${API_BASE_URL + '/get-projetos-id'}/${id}}`);
        return res.data;
    }catch(error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

const update_projetos = async (id, updatedProjetos) => {
    try {
        const res = await axios.put(`${API_BASE_URL + '/update-projetos'}/${id}`, updatedProjetos);
        return res.data;
    }catch(error) {
        console.error("Error updating projetos", error);
        throw error;
    }
}

const delete_projetos = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL + '/delete-projetos'}/${id}`);
        return { message: "Projetos deleted successfully"};
    }catch(error) {
        console.error("Error deleting projetos", error);
        throw error;
    }
}

export { create_projetos, get_projetos, get_projetos_id, update_projetos, delete_projetos };
