import React from 'react';

import Home from "../pages/home";
import Funcionarios from '../pages/funcionarios';


const Body = () => {
    return (
        <div className="p-14 sm:ml-56 mt-12">
            {/* <Home /> */}
            <Funcionarios />
        </div>
    );
}

export default Body