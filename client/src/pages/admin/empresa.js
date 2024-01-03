import React from "react";

const Empresa = () => {
    return (
        <div>
            <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:dark:bg-gray-800 bg-gray-50 dark:bg-gray-700 dark:text-gray-100" type="button">
                Criar empresa
            </button>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Nome</th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Telefone</div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Localização</div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">Email</div>
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
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p>costMange</p>
                            </th>
                            <td className="px-6 py-4">
                                <p>2556421</p>
                            </td>
                            <td className="px-6 py-4">
                                <p>Praia</p>
                            </td>
                            <td className="px-6 py-4">
                                <p>costmanage@gmail.com</p>
                            </td>
                            <td className="px-4 py-1 text-right">
                                <svg className="w-4 h-4 text-gray-800 dark:text-white hover:dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279" />
                                </svg>
                            </td>
                            <td className="px-4 py-1 text-right">
                                <svg className="w-4 h-4 text-gray-800 dark:text-white hover:dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                </svg>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Empresa;
