import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import * as api from '../services/ApiProjetos';

const Projetos = () => {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        get_projetos();
    }, []);

    const get_projetos = async () => {
        try {
            const data = await api.get_projetos();
            setProjetos(data);
        } catch (error) {
            console.error("Error fetching projetos", error);
        }
    }

    const delete_projetos = async (id) => {
        try {
            await api.delete_projetos(id);
            setProjetos(projetos.filter((item) => item.id !== id));
        } catch(error) {
            console.error("Error deleting projetos", error)
        }
    }

    return (
        <div>
            <Link to="/new-projetos">
                <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:dark:bg-gray-800 bg-gray-50 dark:bg-gray-700 dark:text-gray-100" type="button">
                    Criar projeto
                </button>
            </Link>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Projeto</th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Descrição</div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Data inicio</div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Data final</div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Valor</div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Tipo</div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Estado</div>
                            </th>
                            <th scope="col" className="px-4 py-1">
                                <span className="sr-only">Edit</span>
                            </th>
                            <th scope="col" className="px-4 py-1">
                                <span className="sr-only">Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {projetos && Array.isArray(projetos) && projetos.map((proj) => (
                            <tr key={proj.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <p>{proj.nome}</p>
                                </th><td className="px-6 py-4">
                                    <p>{proj.descrisao}</p>
                                </td><td className="px-6 py-4">
                                    <p>{proj.dataInicio}</p>
                                </td><td className="px-6 py-4">
                                    <p>{proj.dataFinal}</p>
                                </td><td className="px-6 py-4">
                                    <p>{proj.valor}</p>
                                </td><td className="px-6 py-4">
                                    <p>{proj.tipo}</p>
                                </td><td className="px-6 py-4">
                                    <p>{proj.estado}</p>
                                </td>
                                <td className="px-4 py-1 text-right">
                                    <svg className="w-4 h-4 text-gray-800 dark:text-white hover:dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279" />
                                    </svg>
                                </td>
                                <td className="px-4 py-1 text-right">
                                    <svg className="w-4 h-4 text-gray-800 dark:text-white hover:dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path onClick={() => delete_projetos(proj.id)} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                    </svg>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Projetos;