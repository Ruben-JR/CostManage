import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidenav from "./sidenav";
import Toobar from "./toolbar";
// import Footer from "./footer";

import Home from '../pages/home';
import Entrada from '../pages/entrada';
import Funcionarios from '../pages/funcionarios';
import Gastos from '../pages/gastos';
import Projetos from '../pages/projetos';
import Transacao from '../pages/transacao';

//admin
import Tag from '../pages/admin/tag';
import Empresa from '../pages/admin/empresa';
import TipoGasto from '../pages/admin/tipo_gasto';

//auth
import Login from "../pages/auth/login";
import Register from '../pages/auth/register';
import Profile from '../pages/auth/profile';
import ResetPassword from "../pages/auth/reset_password";

const Body = () => {
    return (
        <Router>
            <Toobar />
            <Sidenav />
            <div className="p-14 sm:ml-56 mt-12">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/entrada" element={<Entrada />} />
                    <Route path="/funcionarios" element={<Funcionarios />} />
                    <Route path="/tag" element={<Tag />} />
                    <Route path="/gastos" element={<Gastos />} />
                    <Route path="/projetos" element={<Projetos />} />
                    <Route path="/transacao" element={<Transacao />} />
                    <Route path="/tipo-gasto" element={<TipoGasto />} />
                    <Route path="/empresa" element={<Empresa />} />
                    <Route path="/profile" element={<Profile />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/password" element={<ResetPassword />} />
                </Routes>
            </div>
            {/* <Footer /> */}
        </Router>
    );
}

export default Body